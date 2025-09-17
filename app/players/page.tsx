import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Trophy, Medal, Search, Crown, Star } from "lucide-react"

const topPlayers = [
  {
    name: "TheViper",
    country: "Norway",
    rating: 2847,
    rank: 1,
    tournaments: 45,
    wins: 38,
    winRate: 84.4,
    recentForm: [1, 1, 1, 0, 1],
    avatar: "/theviper.jpg",
    specialization: "All-around",
    achievements: ["Red Bull Wololo Champion", "Hidden Cup Winner", "World #1 Player"],
    totalEarnings: "$85,000",
    favoriteMap: "Arabia",
    mainCiv: "Mayans",
  },
  {
    name: "Hera",
    country: "Australia",
    rating: 2798,
    rank: 2,
    tournaments: 42,
    wins: 35,
    winRate: 83.3,
    recentForm: [1, 1, 0, 1, 1],
    avatar: "/hera.jpg",
    specialization: "Aggressive Play",
    achievements: ["King of the Desert Champion", "NAC Winner", "Streaming Legend"],
    totalEarnings: "$72,000",
    favoriteMap: "Arena",
    mainCiv: "Franks",
  },
  {
    name: "Liereyy",
    country: "China",
    rating: 2756,
    rank: 3,
    tournaments: 38,
    wins: 31,
    winRate: 81.6,
    recentForm: [1, 0, 1, 1, 1],
    avatar: "/liereyy.jpg",
    specialization: "Strategic Play",
    achievements: ["Hidden Cup 5 Champion", "Masters of Arena Winner", "Asian Champion"],
    totalEarnings: "$58,000",
    favoriteMap: "Nomad",
    mainCiv: "Chinese",
  },
  {
    name: "DauT",
    country: "Serbia",
    rating: 2689,
    rank: 4,
    tournaments: 52,
    wins: 39,
    winRate: 75.0,
    recentForm: [1, 1, 1, 0, 0],
    avatar: "/daut.jpg",
    specialization: "Castle Drop",
    achievements: ["AoeLeagues Champion", "Veteran Player Award", "Community Legend"],
    totalEarnings: "$65,000",
    favoriteMap: "Black Forest",
    mainCiv: "Celts",
  },
  {
    name: "Vinchester",
    country: "Germany",
    rating: 2634,
    rank: 5,
    tournaments: 35,
    wins: 28,
    winRate: 80.0,
    recentForm: [1, 1, 0, 1, 1],
    avatar: "/vinchester.jpg",
    specialization: "Micro Management",
    achievements: ["Alchemy Masters Champion", "Rising Star", "European Champion"],
    totalEarnings: "$42,000",
    favoriteMap: "Arabia",
    mainCiv: "Britons",
  },
  {
    name: "TheMax",
    country: "Poland",
    rating: 2587,
    rank: 6,
    tournaments: 29,
    wins: 22,
    winRate: 75.9,
    recentForm: [0, 1, 1, 1, 0],
    avatar: "/themax.jpg",
    specialization: "Economic Play",
    achievements: ["Low Elo Legends Champion", "Community Favorite", "Polish Champion"],
    totalEarnings: "$35,000",
    favoriteMap: "Islands",
    mainCiv: "Vikings",
  },
  {
    name: "Jordan_23",
    country: "USA",
    rating: 2543,
    rank: 7,
    tournaments: 33,
    wins: 25,
    winRate: 75.8,
    recentForm: [1, 0, 1, 1, 1],
    avatar: "/placeholder.svg",
    specialization: "Cavalry Play",
    achievements: ["NAC Finalist", "American Champion"],
    totalEarnings: "$28,000",
    favoriteMap: "Arabia",
    mainCiv: "Franks",
  },
  {
    name: "MbL",
    country: "Argentina",
    rating: 2521,
    rank: 8,
    tournaments: 31,
    wins: 23,
    winRate: 74.2,
    recentForm: [1, 1, 0, 1, 0],
    avatar: "/placeholder.svg",
    specialization: "Archer Play",
    achievements: ["South American Champion", "Hidden Cup Finalist"],
    totalEarnings: "$32,000",
    favoriteMap: "Arena",
    mainCiv: "Britons",
  },
]

const risingStars = [
  {
    name: "Sitaux",
    country: "France",
    rating: 2456,
    rank: 12,
    tournaments: 18,
    wins: 14,
    winRate: 77.8,
    recentForm: [1, 1, 1, 1, 0],
    avatar: "/sitaux.jpg",
    specialization: "Fast Castle",
    achievements: ["Rookie of the Year 2024", "French Champion"],
    totalEarnings: "$15,000",
    favoriteMap: "Arabia",
    mainCiv: "Franks",
  },
  {
    name: "Capoch",
    country: "Argentina",
    rating: 2398,
    rank: 15,
    tournaments: 16,
    wins: 12,
    winRate: 75.0,
    recentForm: [1, 0, 1, 1, 1],
    avatar: "/capoch.jpg",
    specialization: "Archer Play",
    achievements: ["South American Champion", "Akkal Masters Winner"],
    totalEarnings: "$18,000",
    favoriteMap: "Arena",
    mainCiv: "Mayans",
  },
  {
    name: "Hearttt",
    country: "USA",
    rating: 2367,
    rank: 18,
    tournaments: 14,
    wins: 10,
    winRate: 71.4,
    recentForm: [1, 1, 0, 1, 0],
    avatar: "/hearttt.jpg",
    specialization: "Naval Combat",
    achievements: ["North American Rising Star", "Masters of Arena Champion"],
    totalEarnings: "$12,000",
    favoriteMap: "Islands",
    mainCiv: "Vikings",
  },
  {
    name: "ACCM",
    country: "Peru",
    rating: 2334,
    rank: 22,
    tournaments: 12,
    wins: 9,
    winRate: 75.0,
    recentForm: [1, 1, 1, 0, 1],
    avatar: "/placeholder.svg",
    specialization: "Eagle Warriors",
    achievements: ["South American Rising Star"],
    totalEarnings: "$8,000",
    favoriteMap: "Nomad",
    mainCiv: "Incas",
  },
  {
    name: "Dogao",
    country: "Brazil",
    rating: 2312,
    rank: 25,
    tournaments: 15,
    wins: 11,
    winRate: 73.3,
    recentForm: [0, 1, 1, 1, 1],
    avatar: "/placeholder.svg",
    specialization: "Aggressive Rush",
    achievements: ["Brazilian Champion"],
    totalEarnings: "$10,000",
    favoriteMap: "Arabia",
    mainCiv: "Aztecs",
  },
]

function PlayerCard({ player, showRank = true }: { player: any; showRank?: boolean }) {
  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="h-5 w-5 text-yellow-500" />
    if (rank <= 3) return <Medal className="h-5 w-5 text-orange-500" />
    return <Trophy className="h-5 w-5 text-muted-foreground" />
  }

  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
              <AvatarFallback>{player.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="flex items-center gap-2">
                {showRank && getRankIcon(player.rank)}
                {player.name}
                {showRank && <span className="text-sm text-muted-foreground">#{player.rank}</span>}
              </CardTitle>
              <CardDescription>
                {player.country} • {player.specialization}
              </CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="font-mono">
            {player.rating}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="font-semibold">{player.tournaments}</div>
              <div className="text-muted-foreground">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{player.wins}</div>
              <div className="text-muted-foreground">Wins</div>
            </div>
            <div className="text-center">
              <div className="font-semibold">{player.winRate}%</div>
              <div className="text-muted-foreground">Win Rate</div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Win Rate</span>
              <span className="text-sm text-muted-foreground">{player.winRate}%</span>
            </div>
            <Progress value={player.winRate} className="h-2" />
          </div>

          <div>
            <div className="text-sm font-medium mb-2">Recent Form (Last 5 matches)</div>
            <div className="flex space-x-1">
              {player.recentForm.map((result: number, index: number) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    result === 1
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                  }`}
                >
                  {result === 1 ? "W" : "L"}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium mb-2">Achievements</div>
            <div className="flex flex-wrap gap-1">
              {player.achievements.map((achievement: string) => (
                <Badge key={achievement} variant="outline" className="text-xs">
                  <Star className="mr-1 h-3 w-3" />
                  {achievement}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium mb-2">Total Earnings</div>
            <div className="text-sm">{player.totalEarnings}</div>
          </div>

          <div>
            <div className="text-sm font-medium mb-2">Favorite Map</div>
            <div className="text-sm">{player.favoriteMap}</div>
          </div>

          <div>
            <div className="text-sm font-medium mb-2">Main Civilization</div>
            <div className="text-sm">{player.mainCiv}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function PlayersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-balance">Player Dashboard</h1>
          <p className="mt-2 text-lg text-muted-foreground text-pretty">
            Explore player statistics, tournament results, and performance analytics
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search players..." className="pl-10" />
          </div>
        </div>

        <Tabs defaultValue="top-players" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="top-players"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
            >
              Top Players
            </TabsTrigger>
            <TabsTrigger
              value="rising-stars"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
            >
              Rising Stars
            </TabsTrigger>
          </TabsList>

          <TabsContent value="top-players" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2">
              {topPlayers.map((player) => (
                <PlayerCard key={player.name} player={player} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rising-stars" className="mt-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">Emerging Talent</h3>
              <p className="text-muted-foreground text-pretty">
                Players showing exceptional growth and potential in recent tournaments
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {risingStars.map((player) => (
                <PlayerCard key={player.name} player={player} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Player Statistics Overview */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Tournament Statistics</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-primary">2,847</CardTitle>
                <CardDescription>Highest Rating (TheViper)</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-primary">84.4%</CardTitle>
                <CardDescription>Best Win Rate (TheViper)</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-primary">52</CardTitle>
                <CardDescription>Most Tournaments (DauT)</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-primary">500+</CardTitle>
                <CardDescription>Active Players</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
