"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Map, Search, Trophy, Zap, Target, Shield, Sword } from "lucide-react"

const maps = [
  {
    id: "badlands",
    name: "Badlands",
    image: "/maps/badlands.png",
    type: "Open",
    description: "A desert map with scattered resources and strategic positioning opportunities.",
    bestCivs: ["Byzantines", "Saracens", "Berbers"],
    strategies: ["Fast Castle into Knights", "Archer rush with tower support", "Camel rush for counter-play"],
    tournaments: ["Red Bull Wololo", "King of the Desert", "Hidden Cup"],
    features: ["Open terrain", "Scattered resources", "Multiple attack angles"],
  },
  {
    id: "big-freeze",
    name: "Big Freeze",
    image: "/maps/big-freeze.png",
    type: "Closed",
    description: "A frozen map with water features and unique strategic elements.",
    bestCivs: ["Vikings", "Japanese", "Celts"],
    strategies: ["Dock control for fish boom", "Infantry rush across ice", "Defensive castle play"],
    tournaments: ["AoeLeagues Championship", "Low Elo Legends"],
    features: ["Water control", "Ice passages", "Limited resources"],
  },
  {
    id: "coast-arena",
    name: "Coast Arena",
    image: "/maps/coast-arena.png",
    type: "Water",
    description: "An arena-style map with coastal elements and defensive opportunities.",
    bestCivs: ["Teutons", "Byzantines", "Koreans"],
    strategies: ["Fast Imperial with unique units", "Monk rush through gaps", "Siege workshop timing"],
    tournaments: ["Masters of Arena", "Alchemy Masters"],
    features: ["Walled start", "Coastal access", "Defensive positioning"],
  },
  {
    id: "hoodoo",
    name: "Hoodoo",
    image: "/maps/hoodoo.png",
    type: "Nomad",
    description: "A unique map with central forest and multiple expansion opportunities.",
    bestCivs: ["Mayans", "Aztecs", "Incas"],
    strategies: ["Eagle warrior raids", "Archer mass with micro", "Economic boom to Imperial"],
    tournaments: ["King of the Desert", "T90 Community"],
    features: ["Central forest", "Multiple expansions", "Raid opportunities"],
  },
  {
    id: "koala",
    name: "Koala",
    image: "/maps/koala.png",
    type: "Open",
    description: "A forested map with multiple clearings and strategic choke points.",
    bestCivs: ["Celts", "Britons", "Vietnamese"],
    strategies: ["Archer play with forest advantage", "Siege push through chokes", "Economic focus with trade"],
    tournaments: ["Practice Squad Tournaments", "Akkal Championships"],
    features: ["Forest advantage", "Multiple clearings", "Choke points"],
  },
  {
    id: "le-grand-fosse",
    name: "Le Grand Fosse",
    image: "/maps/le-grand-fosse.png",
    type: "Closed",
    description: "A map with a large central depression and elevated positions.",
    bestCivs: ["Franks", "Persians", "Huns"],
    strategies: ["Cavalry dominance on open areas", "Control of high ground", "Multi-pronged attacks"],
    tournaments: ["Red Bull Wololo", "European Championships"],
    features: ["Elevation differences", "Central depression", "Strategic positioning"],
  },
  {
    id: "northern-crossings",
    name: "Northern Crossings",
    image: "/maps/northen-crossings.png",
    type: "Hybrid",
    description: "An island map with multiple landmasses and naval combat focus.",
    bestCivs: ["Vikings", "Portuguese", "Malay"],
    strategies: ["Fast galley rush", "Island hopping with transports", "Cannon galleon control"],
    tournaments: ["Naval Masters", "Island Kings"],
    features: ["Multiple islands", "Naval combat", "Transport warfare"],
  },
  {
    id: "roe-rage",
    name: "Roe Rage",
    image: "/Roe_rage_aoe2_map.png",
    type: "Hybrid",
    description: "A water map with central island and aggressive naval gameplay.",
    bestCivs: ["Vikings", "Saracens", "Italians"],
    strategies: ["Aggressive galley play", "Fire ship counters", "Central island control"],
    tournaments: ["Water Warriors", "Naval Championships"],
    features: ["Central island", "Aggressive gameplay", "Naval focus"],
  },
  {
    id: "sunburn",
    name: "Sunburn",
    image: "/maps/sunburn.png",
    type: "Open",
    description: "A map with multiple ponds and hybrid land-water gameplay.",
    bestCivs: ["Japanese", "Aztecs", "Malians"],
    strategies: ["Hybrid army composition", "Pond control for fish", "Flexible unit production"],
    tournaments: ["Hybrid Masters", "Community Cups"],
    features: ["Multiple ponds", "Hybrid gameplay", "Flexible strategies"],
  },
  {
    id: "triple-tunnel",
    name: "Triple Tunnel",
    image: "/triple-tunnel.png",
    type: "Closed",
    description: "A coastal map with unique tunnel features and strategic depth.",
    bestCivs: ["Spanish", "Portuguese", "Turks"],
    strategies: ["Gunpowder unit advantage", "Coastal control", "Tunnel warfare tactics"],
    tournaments: ["Coastal Conquest", "Strategic Masters"],
    features: ["Tunnel systems", "Coastal elements", "Strategic depth"],
  },
  {
    id: "african-rivers",
    name: "African Rivers",
    image: "/maps/african-rivers.png",
    type: "Hybrid",
    description:
      "A unique map where players start without a Town Center and must build their civilization from scratch.",
    bestCivs: ["Chinese", "Persians", "Mayans"],
    strategies: ["Fast Town Center placement", "Villager fights for resources", "Quick military production"],
    tournaments: ["Nomad Masters", "Hidden Cup Nomad Special"],
    features: ["No starting Town Center", "Resource competition", "High skill ceiling"],
  },
]

const categories = ["All", "Open", "Closed", "Water", "Hybrid", "Nomad"]

function MapCard({ map }: { map: any }) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Open":
        return <Target className="h-4 w-4" />
      case "Water":
        return <Zap className="h-4 w-4" />
      case "Hybrid":
        return <Shield className="h-4 w-4" />
      case "Closed":
        return <Sword className="h-4 w-4" />
      case "Nomad":
        return <Map className="h-4 w-4" />
      default:
        return <Map className="h-4 w-4" />
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105">
          <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
            <Image
              src={map.image || "/placeholder.svg"}
              alt={map.name}
              fill
              className="object-cover transition-transform hover:scale-110"
            />
          </div>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center justify-between">
              {map.name}
              {getTypeIcon(map.type)}
            </CardTitle>
            <CardDescription>{map.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Badge variant="secondary">{map.type}</Badge>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {getTypeIcon(map.type)}
            {map.name}
          </DialogTitle>
          <DialogDescription>{map.description}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image src={map.image || "/placeholder.svg"} alt={map.name} fill className="object-cover" />
            </div>

            <div className="grid grid-cols-1 gap-4 text-sm">
              <div>
                <span className="font-medium">Type:</span> {map.type}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Tabs defaultValue="strategies" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="strategies" className="text-xs">
                  Strategies
                </TabsTrigger>
                <TabsTrigger value="civs" className="text-xs">
                  Best Civs
                </TabsTrigger>
                <TabsTrigger value="tournaments" className="text-xs">
                  Tournaments
                </TabsTrigger>
              </TabsList>

              <TabsContent value="strategies" className="mt-6 space-y-4">
                <div>
                  <h4 className="font-medium mb-3">Recommended Strategies</h4>
                  <ul className="space-y-2">
                    {map.strategies.map((strategy: string, index: number) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Target className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                        <span>{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="civs" className="mt-6 space-y-4">
                <div>
                  <h4 className="font-medium mb-3">Best Civilizations</h4>
                  <div className="flex flex-wrap gap-2">
                    {map.bestCivs.map((civ: string) => (
                      <Badge key={civ} variant="secondary">
                        {civ}
                      </Badge>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tournaments" className="mt-6 space-y-4">
                <div>
                  <h4 className="font-medium mb-3">Featured in Tournaments</h4>
                  <div className="space-y-2">
                    {map.tournaments.map((tournament: string) => (
                      <div key={tournament} className="flex items-start gap-2 text-sm">
                        <Trophy className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                        <span>{tournament}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div>
              <h4 className="font-medium mb-2">Key Features</h4>
              <div className="flex flex-wrap gap-2">
                {map.features.map((feature: string) => (
                  <Badge key={feature} variant="outline">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function MapsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredMaps = maps.filter((map) => {
    const matchesSearch =
      map.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      map.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || map.type === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Tournament Maps</h1>
          <p className="mt-2 text-lg text-muted-foreground text-pretty">
            Explore strategic maps used in competitive Age of Empires 2 tournaments
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search maps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Maps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredMaps.map((map) => (
            <MapCard key={map.id} map={map} />
          ))}
        </div>

        {filteredMaps.length === 0 && (
          <div className="text-center py-12">
            <Map className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium">No maps found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Map Statistics</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-primary">{maps.length}</CardTitle>
                <CardDescription>Total Tournament Maps</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-primary">
                  {maps.filter((m) => m.type === "Open").length}
                </CardTitle>
                <CardDescription>Open Maps</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-primary">
                  {maps.filter((m) => m.type === "Closed").length}
                </CardTitle>
                <CardDescription>Closed Maps</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-primary">
                  {maps.filter((m) => m.type === "Water").length}
                </CardTitle>
                <CardDescription>Water Maps</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-primary">
                  {maps.filter((m) => m.type === "Hybrid").length}
                </CardTitle>
                <CardDescription>Hybrid Maps</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
