import { columns } from "@/components/table/columns"
import { DataTable } from "@/components/table/data-table"
import { contactsData } from "@/utils/constants"

const ContactTable = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={contactsData} />
    </div>
  )
}

export default ContactTable 
