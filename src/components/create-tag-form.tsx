import { Check, Loader2, X } from 'lucide-react'
import { useForm, SubmitHandler} from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from "./ui/button";
import * as Dialog from '@radix-ui/react-dialog'
import { useMutation, useQueryClient, } from '@tanstack/react-query'

const createTagSchema = z.object({
  fullName: z.string().min(3, { message: 'Preencha o nome completo!' }),
  amountToDeposit: z.number() .min(3, { message: 'Precisa preencher o campo!' }),
  date: z.string().min(1, {message: 'Precisa preencher a data!'})
})



type CreateTagSchema = z.infer<typeof createTagSchema>

// function getSlugFromString(input: string): string {
//   return  input
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "")
//     .toLowerCase()
//     .replace(/[^\w\s]/g, '')
//     .replace(/\s+/g, '-');
// }

export function CreateTagForm() {
  const queryClient = useQueryClient()

  const { register, handleSubmit, formState } = useForm<CreateTagSchema>({
    resolver: zodResolver(createTagSchema),
  })
   
  // const fullNameWatch = watch ('fullName')

  // const amountToDeposit = watch ('amountToDeposit')

  // console.table({fullNameWatch,amountToDeposit,currentDate })

  // const slug = watch('fullName') 
  //   ? getSlugFromString(watch('fullName')) 
  //   : ''

  // const { mutateAsync } = useMutation({
  //   mutationFn: async ({ fullName }: CreateTagSchema) => {
  //     // delay 2s
  //     await new Promise(resolve => setTimeout(resolve, 2000))

  //     await fetch('http://localhost:3333/tags', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         title,
  //         slug,
  //         amountOfVideos: 0,
  //       }),
  //     })
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ['get-tags'],
  //     })
  //   },
  //   onError: (error) => {
  //     console.log('Devo tratar esse erro')
  //   }
  // })

  // async function createTag({ fullName }: CreateTagSchema) {
  //   await mutateAsync({ fullName })
  // }

  const onSubmit: SubmitHandler < CreateTagSchema > = data => { 
    const currentDate = new Date()
    console.log(data,currentDate)
  }


  return (
    // <form onSubmit={handleSubmit(createTag)} className="w-full space-y-6">
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="fullName">Nome completo</label>
        <input 
          {...register('fullName')}
          id="fullName" 
          type="text" 
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"
        />
        {formState.errors?.fullName && (
          <p className="text-sm text-red-400">{formState.errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="date">Data</label>
        <input
        {...register('date')}
          id="date" 
          type="date"
          // readOnly 
          // value={slug}
          className="border border-zinc-800 rounded-lg px-3 py-2 bg-zinc-800/50 w-full text-sm"
        />
        {formState.errors?.date && (
          <p className="text-sm text-red-400">{formState.errors.date.message}</p>
          )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="amountToDeposit">Valor a depositar</label>
        <input
        {...register('amountToDeposit')}
          id="amountToDeposit" 
          type="number" 
          min="1"
          // readOnly 
          // value={slug}
          className="border border-zinc-800 rounded-lg px-3 py-2 bg-zinc-800/50 w-full text-sm"
        />
        {formState.errors?.amountToDeposit && (
          <p className="text-sm text-red-400">{formState.errors.amountToDeposit.message}</p>
        )}
      </div>

      <div className="flex items-center justify-end gap-2">
        <Dialog.Close asChild>
          <Button>
            <X className="size-3" />
            Cancelar
          </Button>
        </Dialog.Close>
        <Button disabled={formState.isSubmitting} className="bg-teal-400 text-teal-950" type="submit">
          {formState.isSubmitting ? <Loader2 className="size-3 animate-spin" /> : <Check className="size-3" />}
          Confirmar
        </Button>
      </div>
    </form>
  )
}