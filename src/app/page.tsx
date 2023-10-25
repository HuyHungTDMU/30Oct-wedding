import About from "@/app/components/about";
import Story from "@/app/components/story";
import Menu from "@/app/components/menu";
import Gallery from "@/app/components/gallery";
import Banner from "@/app/components/banner";
import Event from "@/app/components/event";

export default function Home() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-between">
            <Banner/>
            <Menu/>
            <About/>
            <Story/>
            <Gallery/>
            <Event/>
            <div
                className='mt-36 h-[90px] text-5xl text-[#703B2B] bg-gradient-to-b from-zinc-200 w-screen text-center items-center justify-center flex'>
                𝒯𝒽𝒶𝓃𝓀 𝒴ℴ𝓊
            </div>
        </main>
    )
}
