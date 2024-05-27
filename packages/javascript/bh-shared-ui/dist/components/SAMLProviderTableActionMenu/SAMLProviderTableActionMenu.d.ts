import React from 'react';
interface SAMLProviderTableActionsMenuProps {
    SAMLProviderId: string;
    onDeleteSAMLProvider: (SAMLProviderId: string) => any;
}
declare const SAMLProviderTableActionsMenu: React.FC<SAMLProviderTableActionsMenuProps>;
export default SAMLProviderTableActionsMenu;
