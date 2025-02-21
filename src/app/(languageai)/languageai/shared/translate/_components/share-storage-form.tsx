import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {LuCopy} from "react-icons/lu";
import {copyToClipboard} from "@/lib/copyToClipboard";
import {env} from "@/lib/env";
import {useQuery} from "@tanstack/react-query";
import {
    findTranslationStorageSharedUsers,
    TSharedTranslationStorage,
} from "@/lib/api/translation/find-translation-storage-shared-users";
import {ChangeEvent, useState} from "react";
import SharedTranslateStorageUsers
    from "@/app/(languageai)/languageai/shared/translate/_components/shared-storage-users";
import {z} from 'zod';
import {toast} from "react-toastify";
import {createSharedTranslationStorage} from "@/lib/api/translation/create-shared-translation-storage";
import {Row} from "@tanstack/table-core";
import {TTranslationStorage} from "@/lib/api/translation/createTranslationStorage";
import {sendShareStorageEmail} from "@/lib/mail/send-share-storage-email";
import {useLanguageaiStorageSharingStore} from "@/app/(languageai)/_lib/use-languageai-storage-sharing-store";
import {cn} from "@/lib/utils";
import {fetchCookieToken} from "@/lib/fetchCookieToken";
import {decode, JwtPayload} from "jsonwebtoken";

type ShareTranslateStorageFormProps = {
    row: Row<TTranslationStorage>
};

const ShareTranslateStorageForm = ({
                                       row,
                                   }: ShareTranslateStorageFormProps) => {
    const {isLoading, updateStore} = useLanguageaiStorageSharingStore();
    const [searchedEmail, setSearchedEmail] = useState("");
    const [sharedUsers, setSharedUsers] = useState<TSharedTranslationStorage[]>(
        [],
    );

    const {isFetching, data, refetch} = useQuery({
        queryKey: ["shareTranslateStorageUsers", row.original.id],
        queryFn: async () => {
            const sharedUsersApiResponse =
                await findTranslationStorageSharedUsers(row.original.id);
            setSharedUsers(sharedUsersApiResponse.data);
            return sharedUsersApiResponse.data;
        },
    });

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value.toLowerCase();
        setSearchedEmail(email);
        if (data && data.length > 0) {
            const newSharedUsers = data?.filter((user) =>
                user.shared_user_email.includes(email),
            );
            setSharedUsers(newSharedUsers);
        }
        return email;
    };

    const handleAction = async (formData: FormData) => {
        const email = formData.get("email") as string;

        updateStore("isLoading", true);
        try {
            const parsedEmail = z.string().email().safeParse(email);
            if (!parsedEmail.success) {
                toast.error("Invalid email");
                return;
            }
            const token = await fetchCookieToken() as string;
            const decoded = decode(token) as JwtPayload;
            if (parsedEmail.data === decoded.email) {
                toast.error("Why did you share to yourself?")
                return;
            }

            if (data && data?.length > 0 && data?.map((d) => d.shared_user_email).includes(parsedEmail.data)) {
                toast.success("Shared successfully");
                return;
            }

            const sharedTranslationStorage = await createSharedTranslationStorage(parsedEmail.data, row.original.id);
            const sendEmail = await sendShareStorageEmail(String(row.original.title), `/translation/shared`, sharedTranslationStorage.data.shared_user_email);
            if (sendEmail.accepted.length > 0) {
                toast.success("Invitation sent");
                await refetch()
            } else {
                toast.error("Fail to send invitation, please try again");
            }
        } catch (e: any) {
            console.error(e.message);
            toast.error("Fail to share, please try again");
        } finally {
            setSearchedEmail("");
            updateStore("isLoading", false);
        }
    }

    return (
        <form action={handleAction}>
            <Input
                placeholder="Search or add email"
                name="email"
                type="email"
                className={cn("mb-4", isLoading && 'animate-bounce bg-secondary')}
                value={isLoading ? `Sending to ${searchedEmail}` : searchedEmail}
                onChange={onSearch}
                disabled={isLoading}
            />

            <div className="mb-4">
                <div className="text-sm mb-2">People with access</div>
                <SharedTranslateStorageUsers
                    isFetching={isFetching}
                    searchedEmail={searchedEmail}
                    sharedUsers={sharedUsers}
                />
            </div>

            <div className="flex items-center justify-end">
                <Button
                    type="button"
                    variant="outline"
                    disabled={!data || data.length === 0}
                    onClick={async () =>
                        copyToClipboard(
                            `${env.NEXT_PUBLIC_HOST_URL}/languageai/shared/translate`,
                        )
                    }
                >
                    <LuCopy/>
                    Copy link
                </Button>
            </div>
        </form>
    );
};

export default ShareTranslateStorageForm;
