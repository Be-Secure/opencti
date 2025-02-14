import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { useFormatter } from '../../../components/i18n';
import useGranted, { TAXIIAPI_SETCSVMAPPERS } from '../../../utils/hooks/useGranted';

interface ManageImportConnectorMessageProps {
  name: string
}
const WarningText = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
}));

const ManageImportConnectorMessage: FunctionComponent<ManageImportConnectorMessageProps> = ({ name }) => {
  const { t_i18n } = useFormatter();
  const isCsvMapperUpdater = useGranted([TAXIIAPI_SETCSVMAPPERS]);
  switch (name) {
    case 'ImportCsv':
      return <Box sx={{ paddingTop: '8px' }}>
        <WarningText >{t_i18n('There are not any configurations set yet')}</WarningText>
        <div>
          {
            isCsvMapperUpdater
              ? <Link to="/dashboard/data/processing/csv_mapper">{t_i18n('Create a CSV Mapper configuration')}</Link>
              : <WarningText>{t_i18n('Please contact an administrator')}</WarningText>
          }
        </div>
      </Box>;
    case undefined: // In case there isn't any connector selected
      return null;
    default:
      return null;
  }
};

export default ManageImportConnectorMessage;
