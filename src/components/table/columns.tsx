import { type ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import Button from "../ui/Button"
import type { Contact } from "@/utils/constants"
import IconComponent from "../ui/IconComponent"
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.


// {
//     id: 30,
//     name: "Ryan Carter",
//     isNew: false,
//     avatar: "https://i.pravatar.cc/150?img=30",
//     email: "ryan@gmail.com",
//     phone: "+123456789",
//     leadScore: 71,
//     company: "Vercel",
//     tags: ["frontend", "saas"]
//   }
//
export const RowCell = ({ row, name }: { row: any, name: string }) => {
  return (
    <div >
      <div className=" font-normal text-gray-600">{row.getValue(String(name))}</div>
    </div>
  )
}

export const RowCellWithTags = ({ row, name }: { row: any, name: string }) => {
  console.log(row.getValue(name))
  return (
    <div >
      <div className=" font-normal text-gray-600 flex gap-2">
        {row.getValue(String(name)).map((item: string) => <div className="bg-blue-500 text-white px-2 py-0.5 rounded-md">{item}</div>)}
      </div>
    </div>
  )
}


export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "name",
    header: () => <div className="">Name</div>,
    cell: ({ row }) => <RowCell row={row} name='name' />,
  },
  {
    accessorKey: "avatar",
    header: () => <div className="">Avatar</div>,
    cell: ({ row }) => {
      const avatarUrl = row.getValue('avatar');
      return <IconComponent className="size-9" img={avatarUrl as string} />
    }
  },
  {
    accessorKey: "email",
    header: () => <div className="">Email</div>,
    cell: ({ row }) => <RowCell row={row} name='email' />,
  },
  {
    accessorKey: "phone",
    header: () => <div className="">Phone</div>,
    cell: ({ row }) => <RowCell row={row} name='phone' />,
  },
  {
    accessorKey: "leadScore",
    header: () => <div className="">LeadScore</div>,
    cell: ({ row }) => <RowCell row={row} name='leadScore' />,
  },
  {
    accessorKey: "company",
    header: () => <div className="">Company</div>,
    cell: ({ row }) => <RowCell row={row} name='company' />,
  },
  {
    accessorKey: "tags",
    header: () => <div className="">Tags</div>,
    cell: ({ row }) => <RowCellWithTags row={row} name='tags' />,
  },


  // {
  //   accessorKey: "email",
  //     header: ({ column }) => {
  //       return (
  //         <Button
  //           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
  //         >
  //           Email
  //           <ArrowUpDown className="ml-2 h-4 w-4" />
  //         </Button>
  //       )
  //     },
  // cell: ({ row }) => {
  //   const payment = row.original
  //
  //   return (
  //     <DropdownMenu>
  //       <DropdownMenuTrigger
  //
  //         asChild>
  //         <Button variant="ghost" className="h-8 w-8 p-0">
  //           <span className="sr-only">Open menu</span>
  //           <MoreHorizontal className="h-4 w-4" />
  //         </Button>
  //       </DropdownMenuTrigger>
  //       <DropdownMenuContent align="end">
  //         <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //         <DropdownMenuItem
  //           onClick={() => navigator.clipboard.writeText(payment.id)}
  //         >
  //           Copy payment ID
  //         </DropdownMenuItem>
  //         <DropdownMenuSeparator />
  //         <DropdownMenuItem>View customer</DropdownMenuItem>
  //         <DropdownMenuItem>View payment details</DropdownMenuItem>
  //       </DropdownMenuContent>
  //     </DropdownMenu>
  //   )
  // },
  // },

  // {
  //   accessorKey: "amount",
  //   header: "Amount",
  // },
]
