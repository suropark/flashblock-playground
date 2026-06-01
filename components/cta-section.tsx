import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Droplets, RadioTower } from "lucide-react"
import { GIWA_LINKS } from "@/lib/constants"

export const CTASection: React.FC = () => {
  const links = [
    {
      title: "GIWA Docs",
      description: "Network setup and developer docs",
      url: GIWA_LINKS.DOCS,
      icon: BookOpen,
    },
    {
      title: "Flashblocks Docs",
      description: "Flashblocks RPC behavior and methods",
      url: GIWA_LINKS.FLASHBLOCKS,
      icon: ExternalLink,
    },
    {
      title: "Explorer",
      description: "Inspect GIWA Sepolia transactions",
      url: GIWA_LINKS.EXPLORER,
      icon: RadioTower,
    },
    {
      title: "GIWA Faucet",
      description: "Claim GIWA Sepolia test ETH",
      url: GIWA_LINKS.FAUCET,
      icon: Droplets,
      primary: true,
    },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4 text-center">Ready to implement Flashblocks in your dApp?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <Button
                key={link.title}
                variant={link.primary ? "default" : "outline"}
                className="h-auto p-4 flex flex-col items-center gap-2"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <Icon className="w-5 h-5" />
                  <div className="text-center">
                    <div className="font-medium">{link.title}</div>
                    <div className="text-xs opacity-80">{link.description}</div>
                  </div>
                </a>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
