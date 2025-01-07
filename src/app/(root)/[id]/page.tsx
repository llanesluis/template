export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

interface Props {
  // params are always parsed as strings by default
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  return <div>{id}</div>;
}
