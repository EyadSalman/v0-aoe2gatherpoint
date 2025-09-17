import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Trophy, Users, Clock, ExternalLink } from "lucide-react"

const tournaments2024 = [
  {
    name: "Red Bull Wololo: El Reinado",
    organizer: "Red Bull",
    date: "December 2024",
    prizePool: "$30,000",
    participants: 16,
    status: "completed",
    winner: "TheViper",
    type: "Professional",
  },
  {
    name: "King of the Desert 5",
    organizer: "T90Official",
    date: "October 2024",
    prizePool: "$15,000",
    participants: 32,
    status: "completed",
    winner: "Hera",
    type: "Community",
  },
  {
    name: "Hidden Cup 5",
    organizer: "T90Official",
    date: "August 2024",
    prizePool: "$10,000",
    participants: 16,
    status: "completed",
    winner: "Liereyy",
    type: "Community",
  },
  {
    name: "AoeLeagues Championship",
    organizer: "AoeLeagues",
    date: "July 2024",
    prizePool: "$5,000",
    participants: 64,
    status: "completed",
    winner: "DauT",
    type: "Community",
  },
  {
    name: "Low Elo Legends Cup",
    organizer: "Low Elo Legion",
    date: "June 2024",
    prizePool: "$2,000",
    participants: 128,
    status: "completed",
    winner: "TheMax",
    type: "Community",
  },
  {
    name: "Alchemy Masters",
    organizer: "Alchemy",
    date: "May 2024",
    prizePool: "$3,000",
    participants: 32,
    status: "completed",
    winner: "Vinchester",
    type: "Community",
  },
  {
    name: "Practice Squad Spring Cup",
    organizer: "Practice Squad",
    date: "April 2024",
    prizePool: "$1,500",
    participants: 48,
    status: "completed",
    winner: "Sitaux",
    type: "Community",
  },
  {
    name: "Akkal Championship Series",
    organizer: "Akkal",
    date: "March 2024",
    prizePool: "$4,000",
    participants: 24,
    status: "completed",
    winner: "Capoch",
    type: "Community",
  },
  {
    name: "Masters of Arena 2024",
    organizer: "Community",
    date: "February 2024",
    prizePool: "$2,500",
    participants: 16,
    status: "completed",
    winner: "Hearttt",
    type: "Community",
  },
  {
    name: "NAC 4 - North American Championship",
    organizer: "T90Official",
    date: "January 2024",
    prizePool: "$8,000",
    participants: 20,
    status: "completed",
    winner: "Hera",
    type: "Professional",
  },
  {
    name: "European Championship 2024",
    organizer: "AoeLeagues",
    date: "November 2024",
    prizePool: "$12,000",
    participants: 28,
    status: "completed",
    winner: "Liereyy",
    type: "Professional",
  },
  {
    name: "World Cup of AoE2",
    organizer: "Red Bull",
    date: "September 2024",
    prizePool: "$25,000",
    participants: 32,
    status: "completed",
    winner: "TheViper",
    type: "Professional",
  },
]

const tournaments2025 = [
  {
    name: "Red Bull Wololo: Legacy",
    organizer: "Red Bull",
    date: "March 2025",
    prizePool: "$35,000",
    participants: 16,
    status: "upcoming",
    winner: "TBD",
    type: "Professional",
  },
  {
    name: "King of the Desert 6",
    organizer: "T90Official",
    date: "February 2025",
    prizePool: "$20,000",
    participants: 32,
    status: "upcoming",
    winner: "TBD",
    type: "Community",
  },
  {
    name: "AoeLeagues Spring Championship",
    organizer: "AoeLeagues",
    date: "April 2025",
    prizePool: "$7,500",
    participants: 64,
    status: "registration",
    winner: "TBD",
    type: "Community",
  },
  {
    name: "Hidden Cup 6",
    organizer: "T90Official",
    date: "June 2025",
    prizePool: "$15,000",
    participants: 20,
    status: "announced",
    winner: "TBD",
    type: "Community",
  },
  {
    name: "Practice Squad Summer Series",
    organizer: "Practice Squad",
    date: "July 2025",
    prizePool: "$3,000",
    participants: 48,
    status: "announced",
    winner: "TBD",
    type: "Community",
  },
  {
    name: "Akkal Masters 2025",
    organizer: "Akkal",
    date: "May 2025",
    prizePool: "$5,000",
    participants: 32,
    status: "registration",
    winner: "TBD",
    type: "Community",
  },
  {
    name: "Low Elo Legion Championship",
    organizer: "Low Elo Legion",
    date: "August 2025",
    prizePool: "$4,000",
    participants: 96,
    status: "announced",
    winner: "TBD",
    type: "Community",
  },
  {
    name: "Alchemy Grand Prix",
    organizer: "Alchemy",
    date: "September 2025",
    prizePool: "$6,000",
    participants: 40,
    status: "announced",
    winner: "TBD",
    type: "Community",
  },
]

function TournamentCard({ tournament }: { tournament: any }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "upcoming":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "registration":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
      case "announced":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  const getTypeColor = (type: string) => {
    return type === "Professional"
      ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
  }

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-balance">{tournament.name}</CardTitle>
            <CardDescription>Organized by {tournament.organizer}</CardDescription>
          </div>
          <div className="flex flex-col gap-2">
            <Badge className={getStatusColor(tournament.status)}>{tournament.status}</Badge>
            <Badge className={getTypeColor(tournament.type)}>{tournament.type}</Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{tournament.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-muted-foreground" />
            <span>{tournament.prizePool}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{tournament.participants} players</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>Winner: {tournament.winner}</span>
          </div>
        </div>
        {tournament.status === "registration" && (
          <div className="mt-4">
            <Button className="w-full">
              Register Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function TournamentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Community Tournaments</h1>
          <p className="mt-2 text-lg text-muted-foreground text-pretty">
            Discover past and upcoming Age of Empires 2 tournaments from the community
          </p>
        </div>

        <Tabs defaultValue="2024" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="2024"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
            >
              2024 Tournaments
            </TabsTrigger>
            <TabsTrigger
              value="2025"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
            >
              2025 Tournaments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="2024" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {tournaments2024.map((tournament) => (
                <TournamentCard key={tournament.name} tournament={tournament} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="2025" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {tournaments2025.map((tournament) => (
                <TournamentCard key={tournament.name} tournament={tournament} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground text-pretty">
                More tournaments will be announced throughout the year. Stay tuned!
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Tournament Statistics */}
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-primary">20</CardTitle>
              <CardDescription>Total Tournaments (2024)</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-primary">$162,000</CardTitle>
              <CardDescription>Total Prize Pool (2024)</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-primary">750+</CardTitle>
              <CardDescription>Unique Participants</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-primary">35</CardTitle>
              <CardDescription>Different Organizers</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  )
}
