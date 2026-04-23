import { Badge } from '@/components/base/badge'
import { Icon } from '@/components/base/icon'
import { InputCheckboxIndicator } from '@/components/base/inputs'
import { Table } from '@/components/base/table'
import { formatDatetime } from '@/utils/dayjs'
import { FormsPageHeader } from './components/forms-page-header'

const rows = [
  {
    company: 'Twitterbridge',
    country: 'Tunisia',
    createdAt: '2025-01-08T06:37:44Z',
    department: 'Human Resources',
    dob: '1999-09-10T22:39:58Z',
    email: 'pmartinyuk0@issuu.com',
    firstName: 'Penn',
    gender: 'Female',
    id: 1,
    jobTitle: 'Compensation Analyst',
    lastName: 'Martinyuk',
    name: 'Penn Martinyuk',
    phone: '802 343 6596',
    role: 'Admin',
    updatedAt: '2024-08-16T18:00:17Z',
  },
  {
    company: 'Tambee',
    country: 'France',
    createdAt: '2025-01-08T18:04:33Z',
    department: 'Support',
    dob: '1993-12-10T20:03:15Z',
    email: 'clattie6@imageshack.us',
    firstName: 'Cornelia',
    gender: 'Other',
    id: 7,
    jobTitle: 'Biostatistician III',
    lastName: 'Lattie',
    name: 'Cornelia Lattie',
    phone: '998 415 1046',
    role: 'User',
    updatedAt: '2025-01-09T03:03:21Z',
  },
  {
    company: 'Browseblab',
    country: 'Philippines',
    createdAt: '2024-12-17T22:33:18Z',
    department: 'Support',
    dob: '1981-10-30T05:11:39Z',
    email: 'jkarolowski2@bing.com',
    firstName: 'Joletta',
    gender: 'Male',
    id: 3,
    jobTitle: 'VP Marketing',
    lastName: 'Karolowski',
    name: 'Joletta Karolowski',
    phone: '302 728 0442',
    role: 'Admin',
    updatedAt: '2025-01-05T15:33:24Z',
  },
  {
    company: 'Kanoodle',
    country: 'Morocco',
    createdAt: '2025-07-27T20:28:12Z',
    department: 'Human Resources',
    dob: '1992-04-07T10:41:20Z',
    email: 'tbawme1@issuu.com',
    firstName: 'Tallie',
    gender: 'Female',
    id: 2,
    jobTitle: 'Librarian',
    lastName: 'Bawme',
    name: 'Tallie Bawme',
    phone: '509 120 2293',
    role: 'Manager',
    updatedAt: '2025-05-27T18:08:24Z',
  },
  {
    company: 'Layo',
    country: 'Indonesia',
    createdAt: '2025-03-19T20:46:21Z',
    department: 'Training',
    dob: '1985-08-14T09:59:31Z',
    email: 'kmattys3@illinois.edu',
    firstName: 'Kory',
    gender: 'Other',
    id: 4,
    jobTitle: 'Paralegal',
    lastName: 'Mattys',
    name: 'Kory Mattys',
    phone: '125 684 1736',
    role: 'User',
    updatedAt: '2024-08-29T16:02:18Z',
  },
]

export const FormsPage = () => {
  return (
    <div>
      <FormsPageHeader />
      <div className='divide-y divide-gray-3 px-6 py-4'>
        <div className='flex h-12 items-center pl-0'>
          <Icon name='tabler:chevron-right' />
          <h2 className='mr-2 ml-4 text-14 font-semibold text-gray-12 xl:text-13'>
            Published
          </h2>
          <Badge className='h-5' color='gray' label='3' />
        </div>
        <div className='flex h-12 items-center pl-0'>
          <Icon name='tabler:chevron-down' />
          <h2 className='mr-2 ml-4 text-14 font-semibold text-gray-12 xl:text-13'>
            Draft
          </h2>
          <Badge className='h-5' color='gray' label='5' />
        </div>

        <div className='mt-4'>
          <Table rowBorder>
            <Table.Thead>
              <Table.Tr>
                <Table.Th className='w-10 pl-0'>
                  <InputCheckboxIndicator />
                </Table.Th>
                <Table.Th>Name</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Role</Table.Th>
                <Table.Th>Gender</Table.Th>
                <Table.Th>Country</Table.Th>
                <Table.Th>Job Title</Table.Th>
                <Table.Th>Created At</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {rows.map((row) => (
                <Table.Tr key={row.id}>
                  <Table.Td className='pl-0'>
                    <InputCheckboxIndicator />
                  </Table.Td>
                  <Table.Td>{row.name}</Table.Td>
                  <Table.Td>{row.email}</Table.Td>
                  <Table.Td>
                    <Badge
                      label={row.role}
                      color={
                        row.role === 'Admin'
                          ? 'red'
                          : row.role === 'Manager'
                            ? 'orange'
                            : 'green'
                      }
                    />
                  </Table.Td>
                  <Table.Td>{row.gender}</Table.Td>
                  <Table.Td>{row.country}</Table.Td>
                  <Table.Td>{row.jobTitle}</Table.Td>
                  <Table.Td>{formatDatetime(row.createdAt)}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}
