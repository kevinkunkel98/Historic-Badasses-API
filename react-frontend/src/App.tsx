import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import sampleData from "./data/historic_people.json";
import warBg from './assets/warbg.jpg';

export default function App() {
  const [person, setPerson] = useState(sampleData[0]);

  const getRandomPerson = () => {
    const randomIndex = Math.floor(Math.random() * sampleData.length);
    setPerson(sampleData[randomIndex]);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{ backgroundImage: `url(${warBg})` }}
    >
      {/* Navigation Menu */}
      <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 bg-white rounded-md shadow-md p-3">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="font-medium text-gray-700 hover:text-gray-900">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="font-medium text-gray-700 hover:text-gray-900">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/contact" className="font-medium text-gray-700 hover:text-gray-900">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <Card className="max-w-sm text-center bg-white shadow-lg">
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
