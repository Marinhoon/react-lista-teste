import { ChevronDown } from 'lucide-react'

// import nivoLogo from '../assets/logo-nivo.svg'
import { Badge } from './ui/badge'
import logoBv from '../assets/logobv.png'

export function Header() {
  return (
    <div className="max-w-[1200px] mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          {/* <img src={nivoLogo} alt="nivo.video" /> */}

          <div className="flex items-center gap-2.5">
          <img
            src= {logoBv}
            className="size-5 rounded-full"
            alt=''
          />

          <span className="text-sm font-medium text-zinc-100">Bom Viver</span>

          <Badge variant="primary">CONVENIÊNCIA</Badge>

          <ChevronDown className="text-zinc-600 size-4" />
        </div>
          {/* <Badge>CONVENIÊNCIA</Badge> */}
        </div>

        <svg
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.18372"
            y1="15.598"
            x2="5.32483"
            y2="0.143194"
            className="stroke-zinc-700"
          />
        </svg>

       

        <svg
          width="6"
          height="16"
          viewBox="0 0 6 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.18372"
            y1="15.598"
            x2="5.32483"
            y2="0.143194"
            className="stroke-zinc-700"
          />
        </svg>

        <div className="flex items-center gap-2.5">
          <span className="text-sm font-medium text-zinc-100"></span>

          <ChevronDown className="text-zinc-600 size-4" />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-sm font-medium">Vitor Marinho</span>
          <span className="text-xs text-zinc-400">@marinhoon</span>
        </div>
        <img
          src="https://github.com/Marinhoon.png"
          className="size-8 rounded-full"
          alt=""
        />
        <ChevronDown className="size-4 text-zinc-600" />
      </div>
    </div>
  )
}
