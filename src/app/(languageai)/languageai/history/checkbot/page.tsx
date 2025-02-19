import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {LuChevronLeft} from "react-icons/lu";
import {Suspense} from "react";
import LanguageaiHistoryFallback from "@/app/(languageai)/languageai/history/_components/history-fallback";
import CheckbotHistoryTable from "@/app/(languageai)/languageai/history/checkbot/_components/checkbot-history-table";
import {fetchCookieToken} from "@/lib/fetchCookieToken";
import LanguageaiLoginCard from "@/app/(languageai)/_components/languageai-login-card";

export const revalidate = 0;

const CheckbotHistory = async () => {
    const accessToken = await fetchCookieToken();
    return (
        <section className="w-full h-screen overflow-hidden p-4">
            <div className="flex justify-between mb-4">
                <div>
                    <h1 className="text-xl lg:text-2xl font-bold">Checkbot History</h1>
                    <p className="text-sm">Showing latest history</p>
                </div>
                <Link
                    href="/languageai/history"
                    className={buttonVariants({variant: "secondary"})}
                >
                    <LuChevronLeft/>
                    Back
                </Link>
            </div>
            {accessToken ?
                <Suspense fallback={<LanguageaiHistoryFallback/>}>
                    <CheckbotHistoryTable/>
                </Suspense> :
                <LanguageaiLoginCard/>
            }
        </section>
    );
};

export default CheckbotHistory;
