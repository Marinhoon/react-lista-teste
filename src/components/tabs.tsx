import {
  ListVideo,
  Tags,
  Settings,
  CircleDollarSign,
  Box,
  PiggyBank,
  Users,
} from "lucide-react";

export function Tabs() {
  return (
    <div className="border-b border-zinc-800 py-4">
      <nav className="flex items-center gap-2 max-w-[1200px] mx-auto">
        <a
          href=""
          className="py-1.5 px-3 bg-zinc-800 text-zinc-100 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent"
        >
          <ListVideo className="size-4" />
          Atualizações
        </a>

        <a
          href=""
          className="py-1.5 px-3 text-zinc-300 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800"
        >
          <Tags className="size-4" />
          Pedidos
        </a>

        <a
          href=""
          className="py-1.5 px-3 text-zinc-300 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800"
        >
          <CircleDollarSign className="size-4" />
          Valores
        </a>

        <a
          href=""
          className="py-1.5 px-3 text-zinc-300 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800"
        >
          <Box className="size-4" />
          Produtos
        </a>

        <a
          href=""
          className="py-1.5 px-3 text-zinc-300 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800"
        >
          <PiggyBank className="size-4" />
          Caixa
        </a>

        <a
          href=""
          className="py-1.5 px-3 text-zinc-300 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800"
        >
          <Users className="size-4" />
          Pacientes
        </a>

        <a
          href=""
          className="py-1.5 px-3 text-zinc-300 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800"
        >
          <Settings className="size-4" />
          Configurações
        </a>
      </nav>
    </div>
  );
}
