import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LeaderboardEntry } from "@/types/types"

export function Leaderboard({ entries }: { entries: LeaderboardEntry[] }) {
  return (
    <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20 shadow-xl mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-white text-center">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-white">Rank</TableHead>
              <TableHead className="text-white">Name</TableHead>
              <TableHead className="text-white text-right">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries?.map((entry, index) => (
              <TableRow key={entry.id}>
                <TableCell className="text-white font-medium">{index + 1}</TableCell>
                <TableCell className="text-white">{entry.name}</TableCell>
                <TableCell className="text-white text-right">{entry.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}