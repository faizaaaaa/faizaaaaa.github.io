import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { autocompleteClasses } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 400,
  lineHeight: '60px',
  
}));

// Since only light theme is needed, we directly apply it
const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Work() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Grid container spacing={10}>
        {/* Create 3 Grid items, each with a Paper component (Item) of elevation 24 */}
        <Grid item xs={3.6}>
          <Item className="work-container" elevation={24}  style={{fontFamily: "Bellefair, serif" , fontWeight: '400', fontStyle: "normal", fontSize: '18px', lineHeight:'1.5', color: '#8e8e91', padding: '10px'}}>
          
          • Facilitated the migration of developer platforms from <strong>OpsLevel</strong> to <strong>Backstage</strong> by rebuilding deployment data platform <br /><br />

          • Infrastructured a fully functional application with Go, Postgres and React comprising <strong>4</strong> APIs, <strong>5+</strong> UI components and database <br /><br />

          • Conducted product demonstrations and showcased functionality to <strong>100+</strong> team leaders and colleagues <br /><br />
          <img src="public/images/Twilio_logo.png" alt="Logo" height={50} />
      </Item>
        </Grid>
        <Grid item xs={3.6}>
        <Item className="work-container" elevation={24}  style={{fontFamily: "Bellefair, serif" , fontWeight: '400', fontStyle: "normal", fontSize: '18px', lineHeight:'1.5', color: '#8e8e91', padding: '10px'}}>
          
        • Spearheaded the refinement of key web application pertaining to production environment statuses <br /><br />

        • Presented and implemented new features and bug resolutions in <strong>Angular</strong> increasing end-user efficiency by more than <strong>50%</strong> <br /><br />

        • Documented entire project including bug reports, tickets and code changes of <strong>1000+</strong> lines of code into Jira <br /><br />
        <img src="public/images/cgi.png" alt="Logo" height={50} />
      </Item>
        </Grid>
        <Grid item xs={3.6}>
        <Item className="work-container" elevation={24}  style={{fontFamily: "Bellefair, serif" , fontWeight: '400', fontStyle: "normal", fontSize: '18px', lineHeight:'1.5', color: '#8e8e91', padding: '10px'}}>
          
          • Designed test scripts in <strong>Swift</strong> relating to <strong>10</strong> of the most important API calls functioning as the base of the application <br /><br />

          • Conducted historical analyses of test results and code reviews on <strong>100+</strong> lines of code on the various <strong>viper</strong> model components<br /><br />

          • Participated in product design reviews to provide input on potential problems as well as feature suggestions <br /><br />
          <img src="public/images/rideflag.png" alt="Logo" height={50} />
      </Item>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
