import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, UserButton, SignedOut, SignedIn } from "@clerk/nextjs";

export default function Auth() {
  return (
    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
    <>

      <SignedOut>
        <SignInButton mode="modal">
          {/* <button className="bg-[#2b681b] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign In
          </button> */}
          <Button>
            Sign In
          </Button>
        </SignInButton>
        {/* <SignUpButton mode="modal">
          <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
          Sign Up
          </button>
          </SignUpButton> */}
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}
