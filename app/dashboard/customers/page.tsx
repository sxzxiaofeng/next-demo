import Table from '@/app/ui/customers/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: { query?: string };
}) {
  const query = searchParams?.query || '';
//   const currentPage = Number(searchParams?.page) || 1;
//   console.log(searchParams, 'invoices-query');
//   const totalPages = await fetchInvoicesPages(query);
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        {/* <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1> */}
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        {/* <Search placeholder='Search invoices...' /> */}
        {/* <CreateInvoice /> */}
      </div>
      <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
        <Table customers={customers} />
      </Suspense>
      {/* <div className='mt-5 flex w-full justify-center'>
        <Pagination totalPages={totalPages} />
      </div> */}
    </div>
  );
}
