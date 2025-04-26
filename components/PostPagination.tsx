"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PostPagination({
  page,
  setPage,
  totalpages,
}: {
  page: number;
  setPage: (page: number) => void;
  totalpages: number;
}) {
  const getPages = () => {
    const pages = [];

    // Show up to 3 pages: [prev, current, next]
    for (let i = Math.max(1, page - 1); i <= Math.min(totalpages, page + 1); i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page > 1) setPage(page - 1);
            }}
          />
        </PaginationItem>

        {page > 2 && (
          <>
            <PaginationItem>
              <PaginationLink href="#" onClick={(e) => { e.preventDefault(); setPage(1); }}>
                1
              </PaginationLink>
            </PaginationItem>
            {page > 3 && <PaginationItem><PaginationEllipsis /></PaginationItem>}
          </>
        )}

        {getPages().map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href="#"
              isActive={p === page}
              onClick={(e) => {
                e.preventDefault();
                setPage(p);
              }}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {page < totalpages - 1 && (
          <>
            {page < totalpages - 2 && <PaginationItem><PaginationEllipsis /></PaginationItem>}
            <PaginationItem>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(totalpages);
                }}
              >
                {totalpages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (page < totalpages) setPage(page + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
