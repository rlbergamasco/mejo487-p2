import { Box } from '@mui/material';


export const Page = ({children}) => {
    return (
        <Box id={1} className="page" sx={{ height: '100vh', maxWidth: '1000px', margin: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {children}
        </Box >
    );
}