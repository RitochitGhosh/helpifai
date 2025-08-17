"use client";

import { WidgetFooter } from "@/modules/widget/ui/components/widget-footer";
import { WidgetAuthScreen } from "@/modules/widget/ui/screens/widget-auth-screen";
import { useAtomValue } from "jotai";
import { screenAtom } from "@/modules/widget/atoms/widget-atoms";

interface Props {
    organizationId: string;
}

export const WidgetView = ({ organizationId }: Props) => {
    const screen = useAtomValue(screenAtom);
    const screenComponents = {
        error: <p>TODO: Error </p>,
        loading: <p>TODO: loading </p>,
        auth: <WidgetAuthScreen />,
        voice: <p>TODO: voice </p>,
        inbox: <p>TODO: inbox </p>,
        selection: <p>TODO: selection </p>,
        chat: <p>TODO: chat </p>,
        contact: <p>TODO: contact </p>
    }
    return (
        <main className="min-h-screen min-w-screen flex h-full w-full flex-col overflow-hidden rounded-xl  border bg-muted">
            {screenComponents[screen]}
            {/* <WidgetFooter /> */}
        </main>
    )
}