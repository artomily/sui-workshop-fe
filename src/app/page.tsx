"use client";
import Balance from "@/components/Balance";
import Escrow from "@/components/transaction/Escrow";
import Faucet from "@/components/transaction/Faucet";
import ListMyEscrow from "@/components/ListMyEscrow";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WalletConnection } from "@/components/WalletConnection";
import { ConnectButton } from "@mysten/dapp-kit";

export default function page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl font-bold">Workshop SUI - Frontend</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <span>Start Here!</span>
        {/* <ConnectButton /> */}
        <WalletConnection />
        <Balance />
        <Faucet />
        <Escrow />
        <ListMyEscrow />

      </CardContent>
    </Card>
  )
};
