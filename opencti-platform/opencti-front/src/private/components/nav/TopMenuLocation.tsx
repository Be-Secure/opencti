import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import { CityVariantOutline } from 'mdi-material-ui';
import { PublicOutlined, PlaceOutlined, FlagOutlined, MapOutlined } from '@mui/icons-material';
import { Theme } from '@mui/material/styles/createTheme';
import makeStyles from '@mui/styles/makeStyles';
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

const TopMenuLocation = () => {
  const classes = useStyles();
  const location = useLocation();
  const { t_i18n } = useFormatter();
  return (
    <>
      {!useIsHiddenEntity('Region') && (
        <Button
          component={Link}
          to="/dashboard/locations/regions"
          variant={
            location.pathname.includes('/dashboard/locations/regions')
              ? 'contained'
              : 'text'
          }
          size="small"
          classes={{ root: classes.button }}
        >
          <PublicOutlined className={classes.icon} fontSize="small" />
          {t_i18n('Regions')}
        </Button>
      )}
      {!useIsHiddenEntity('Country') && (
        <Button
          component={Link}
          to="/dashboard/locations/countries"
          variant={
            location.pathname.includes('/dashboard/locations/countries')
              ? 'contained'
              : 'text'
          }
          size="small"
          classes={{ root: classes.button }}
        >
          <FlagOutlined className={classes.icon} fontSize="small" />
          {t_i18n('Countries')}
        </Button>
      )}
      {!useIsHiddenEntity('Administrative-Area') && (
        <Button
          component={Link}
          to="/dashboard/locations/administrative_areas"
          variant={
            location.pathname.includes(
              '/dashboard/locations/administrative_areas',
            )
              ? 'contained'
              : 'text'
          }
          size="small"
          classes={{ root: classes.button }}
        >
          <MapOutlined className={classes.icon} fontSize="small" />
          {t_i18n('Areas')}
        </Button>
      )}
      {!useIsHiddenEntity('City') && (
        <Button
          component={Link}
          to="/dashboard/locations/cities"
          variant={
            location.pathname.includes('/dashboard/locations/cities')
              ? 'contained'
              : 'text'
          }
          size="small"
          classes={{ root: classes.button }}
        >
          <CityVariantOutline className={classes.icon} fontSize="small" />
          {t_i18n('Cities')}
        </Button>
      )}
      {!useIsHiddenEntity('Position') && (
        <Button
          component={Link}
          to="/dashboard/locations/positions"
          variant={
            location.pathname.includes('/dashboard/locations/positions')
              ? 'contained'
              : 'text'
          }
          size="small"
          classes={{ root: classes.button }}
        >
          <PlaceOutlined className={classes.icon} fontSize="small" />
          {t_i18n('Positions')}
        </Button>
      )}
    </>
  );
};

export default TopMenuLocation;
