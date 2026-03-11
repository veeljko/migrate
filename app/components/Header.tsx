import GlobalHeader from "@jetbrains/kotlin-web-site-ui/out/components/header";
import "@jetbrains/kotlin-web-site-ui/out/components/header/index.css";
import HeaderSkeleton from "./sections/sekeletons/HeaderSkeleton";
import { ClientOnly } from "remix-utils/client-only";

export default function Header() {
  return (
    <ClientOnly fallback={<HeaderSkeleton />}>
      {() => <GlobalHeader searchConfig={{}} />}
    </ClientOnly>
  );
}