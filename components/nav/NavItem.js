import { useRouter } from "next/router";

export default function NavItem({ active, text, link, router }) {
    return (
        <div className={`text-white ${active ? "font-extrabold cursor-default" : "font-semibold cursor-pointer"}`} onClick={active ? null : () => {router.push(link)}}>
            {text}
        </div>
    );
}