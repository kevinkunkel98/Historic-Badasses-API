import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import sampleData from "./data/historic_people.json";

export default function App() {
  const [person, setPerson] = useState(sampleData[0]);

  const getRandomPerson = () => {
    const randomIndex = Math.floor(Math.random() * sampleData.length);
    setPerson(sampleData[randomIndex]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Card className="max-w-sm text-center">
        <CardHeader>
          <img src={person.image} alt={person.name} className="w-full h-60 object-cover rounded-md" />
          <CardTitle className="text-2xl font-bold mt-4">{person.name}</CardTitle>
          <CardDescription className="text-gray-500">{person.lifespan}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mt-2">{person.description}</p>
          <Button className="mt-4 w-full" onClick={getRandomPerson}>Next Person</Button>
        </CardContent>
      </Card>
    </div>
  );
}
