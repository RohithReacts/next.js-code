import Link from "next/link";
import { ArrowLeftIcon, CompassIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TextEffect } from "@/components/motion-primitives/text-effect";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <div className="mx-auto flex max-w-md flex-col items-center gap-6">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-border bg-muted/50 text-muted-foreground shadow-xs">
          <CompassIcon className="size-6" />
        </div>

        <div className="space-y-2">
          <p className="font-mono text-xs font-medium tracking-widest text-muted-foreground uppercase">
            Error 404
          </p>
          <TextEffect
            as="h1"
            preset="fade-in-blur"
            per="word"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Page not found
          </TextEffect>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
            have been moved, renamed, or no longer exists.
          </p>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Button
            nativeButton={false}
            render={<Link href="/" />}
            className="gap-2"
          >
            <ArrowLeftIcon data-icon="inline-start" className="size-4" />
            Back to Home
          </Button>
        </div>
      </div>
    </main>
  );
}

