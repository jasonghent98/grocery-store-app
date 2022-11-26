// import {useState} from 'react';
// import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router-dom';
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
// import {useRouter} from 'next/router'
// import {QueryParam} from '../../types/paginationQuery'

// function Content({nextPages}) {
//   const location = useLocation();
//   const [pageCount, setPageCount] = useState(0);
//   const query = new URLSearchParams(location.search);

//   const router = useRouter();
//   const listOfNextPages = Object.values(nextPages.other_pages);

//   const renderPagination = () => {

//     const idx = pageCount;
//     setPageCount(pageCount + 1)
//     console.log(pageCount);
//     const options: QueryParam = {
//         pathname: '/results',
//         query: {
//             // path to reroute for pagination results
//             paginationPath: listOfNextPages[idx]
//         }
//     }
//     console.log('render pagination running...')
//     router.push('/results', options)
//   }

//   const page = parseInt(query.get('page') || '1', 10);
//   return (
//     <Pagination
//       page={page}
//       count={listOfNextPages.length}
//       renderItem={(item) => (
//         <div onClick={renderPagination}>
//         <PaginationItem
//           component={Link}
//           to={'/'}
//           {...item}
//         />
//         </div>
//       )}
//     />
//   );
// }

// export default function PaginationLink({nextPages}) {
//   return (
//     <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
//       <Routes>
//         <Route path="*" element={<Content nextPages={nextPages} />} />
//       </Routes>
//     </MemoryRouter>
//   );
// }

import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} color="secondary" />
      <Pagination count={10} disabled />
    </Stack>
  );
}


