import { useRouter } from "next/router";

export default function NavItem({ active, text, link }) {
    const router = useRouter();

    const redirect = () => {
        router.push(link);
    }
    return (
        <div className={`text-white ${active ? "font-extrabold cursor-default" : "font-semibold cursor-pointer"}`} onClick={active ? null : redirect}>
            {text}
        </div>
    );
}