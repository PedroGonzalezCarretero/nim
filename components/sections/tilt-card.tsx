import { ABOUT_ME } from "@/app/data";
import { Tilt } from "../motion-primitives/tilt";
import profileImage from "@/public/yo.jpg";

export function TiltCard1() {
  return (
    <Tilt rotationFactor={8} isRevese>
      <div
        style={{
          borderRadius: '12px',
        }}
        className="flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900"
      >
        <img
          src={profileImage.src}
          alt="Ghost in the shell - Kôkaku kidôtai"
          className="h-68 object-cover w-full"
        />
        <div className="p-2">
          <h1 className="font-mono leading-snug text-zinc-950 dark:text-zinc-50">
            {ABOUT_ME.name}
          </h1>
          <p className="text-zinc-700 dark:text-zinc-400">
            {ABOUT_ME.description}
          </p>
        </div>
      </div>
    </Tilt>
  )
}
