import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;

declare module 'next-auth/jwt'{
    interface JWT{
        id: UserId
        name?: string | null;
        email?: string | null;
        image?: string | null;
        username?: string | null;
    }
}
declare module 'next-auth'{
    interface Session{
        id: UserId
        name?: string | null;
        email?: string | null;
        image?: string | null;
        username?: string | null;
    }
}