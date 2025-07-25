import { ArrowDownRight, Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SignUpButton, SignInButton } from "@clerk/nextjs";

// interface Hero3Props {
//     heading?: string;
//     description?: string;
//     buttons?: {
//         primary?: {
//             text: string;
//             url: string;
//         };
//         secondary?: {
//             text: string;
//             url: string;
//         };
//     };
//     reviews?: {
//         count: number;
//         avatars: {
//             src: string;
//             alt: string;
//         }[];
//         rating?: number;
//     };
// }

const heading = "Manage your farm with ease"
const description = "A comprehensive solution for all your farm management needs. Track crops, livestock, and resources efficiently."
const reviews = {
    count: 200,
    rating: 5.0,
    avatars: [
        {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
            alt: "Avatar 1",
        },
        {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
            alt: "Avatar 2",
        },
        {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
            alt: "Avatar 3",
        },
        {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp",
            alt: "Avatar 4",
        },
        {
            src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-5.webp",
            alt: "Avatar 5",
        },
    ],
}

export default function Hero() {

    return (
        <section>
            <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
                <div className="mx-auto flex flex-col items-center text-center md:ml-auto lg:max-w-3xl lg:items-start lg:text-left">
                    <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl xl:text-7xl">
                        {heading}
                    </h1>
                    <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
                        {description}
                    </p>
                    <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
                        <span className="inline-flex items-center -space-x-4">
                            {reviews.avatars.map((avatar, index) => (
                                <Avatar key={index} className="size-12 border">
                                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                                </Avatar>
                            ))}
                        </span>
                        <div>
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        className="size-5 fill-yellow-400 text-yellow-400"
                                    />
                                ))}
                                <span className="mr-1 font-semibold">
                                    {reviews.rating?.toFixed(1)}
                                </span>
                            </div>
                            <p className="text-muted-foreground text-left font-medium">
                                from {reviews.count}+ reviews
                            </p>
                        </div>
                    </div>
                    <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                        <SignUpButton mode="modal">
                            <Button variant="default">Sign Up</Button>
                        </SignUpButton>
                        <SignInButton mode="modal">

                            <Button asChild variant="outline">
                                <p>
                                    Get Started
                                    <ArrowDownRight className="size-4" />
                                </p>
                            </Button>
                        </SignInButton>
                    </div>
                </div>
                <div className="flex">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Ontario_farm.jpg"
                        // src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                        alt="Farm with farmstead and fields"
                        className="max-h-[600px] w-full rounded-md object-cover lg:max-h-[800px]"
                    />
                </div>
            </div>
        </section>
    );
};