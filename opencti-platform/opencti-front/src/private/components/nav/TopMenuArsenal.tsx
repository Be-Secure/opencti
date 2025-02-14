import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { BugReportOutlined, SurroundSoundOutlined, WebAssetOutlined } from '@mui/icons-material';
import { Biohazard } from 'mdi-material-ui';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles/createTheme';
import { useFormatter } from '../../../components/i18n';
import { useIsHiddenEntity } from '../../../utils/hooks/useEntitySettings';

const useStyles = makeStyles<Theme>((theme) => ({
  button: {
    marginRight: theme.spacing(2),
    padding: '0 5px 0 5px',
    minHeight: 20,
    minWidth: 20,
    textTransform: 'none',
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const TopMenuArsenal = () => {
  const classes = useStyles();
  const location = useLocation();
  const { t_i18n } = useFormatter();

  return (
    <div>
      {!useIsHiddenEntity('Malware') && (
        <Button
          component={Link}
          to="/dashboard/arsenal/malwares"
          variant={
            location.pathname.includes('/dashboard/arsenal/malwares')
              ? 'contained'
              : 'text'
          }
          size="small"
          classes={{ root: classes.button }}
        >
          <Biohazard className={classes.icon} fontSize="small" />
          {t_i18n('Malwares')}
        </Button>
      )}
      {!useIsHiddenEntity('Channel') && (
        <Button
          component={Link}
          to="/dashboard/arsenal/channels"
          variant={
            location.pathname.includes('/dashboard/arsenal/channels')
              ? 'contained'
              : 'text'
          }
          size="small"
          classes={{ root: classes.button }}
        >
          <SurroundSoundOutlined className={classes.icon} fontSize="small" />
          {t_i18n('Channels')}
        </Button>
      )}
      {!useIsHiddenEntity('Tool') && (
        <Button
          component={Link}
          to="/dashboard/arsenal/tools"
          variant={
            location.pathname.includes('/dashboard/arsenal/tools')
              ? 'contained'
              : 'text'
          }
          size="small"
          classes={{ root: classes.button }}
        >
          <WebAssetOutlined className={classes.icon} fontSize="small" />
          {t_i18n('Tools')}
        </Button>
      )}
      {!useIsHiddenEntity('Vulnerability') && (
        <Button
          component={Link}
          to="/dashboard/arsenal/vulnerabilities"
          variant={
            location.pathname.includes('/dashboard/arsenal/vulnerabilities')
              ? 'contained'
              : 'text'
          }
          size="small"
          classes={{ root: classes.button }}
        >
          <BugReportOutlined className={classes.icon} fontSize="small" />
          {t_i18n('Vulnerabilities')}
        </Button>
      )}
    </div>
  );
};

export default TopMenuArsenal;
