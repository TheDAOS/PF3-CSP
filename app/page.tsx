import Widget from "@/components/widget";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div className="flex gap-1 flex-wrap">
        <Widget size="small" />
        <Widget size="medium" />
        <Widget size="large" />
      </div>
    </main>
  );
}
