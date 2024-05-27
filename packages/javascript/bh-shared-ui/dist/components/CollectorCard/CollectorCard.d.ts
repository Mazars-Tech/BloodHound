/// <reference types="react" />
interface CollectorCardProps {
    collectorType: 'sharphound' | 'azurehound';
    version: string;
    checksum: string;
    onClickDownload?: (collectorType: 'sharphound' | 'azurehound', version: string) => void;
    onClickDownloadChecksum?: (collectorType: 'sharphound' | 'azurehound', version: string) => void;
    isLatest?: boolean;
    isDeprecated?: boolean;
}
declare const CollectorCard: React.FC<CollectorCardProps>;
export default CollectorCard;
