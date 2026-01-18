import { values } from "@/data/values";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function Values() {
  return (
    <section className="border-t bg-muted/50">
      <div className="container mx-auto max-w-5xl px-4 py-24">
        <h2 className="text-3xl font-bold tracking-tight">Values</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <Card key={index} className="bg-background">
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
                <CardDescription>{value.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
