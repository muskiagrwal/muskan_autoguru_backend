import ClientLayout from "@/components/general/ClientLayout";

export default function RootGroupLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClientLayout>
            {children}
        </ClientLayout>
    );
}
