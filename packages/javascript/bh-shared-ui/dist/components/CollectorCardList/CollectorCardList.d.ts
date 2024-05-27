/// <reference types="react" />
interface CollectorCardListProps {
    collectors: {
        collectorType: 'sharphound' | 'azurehound';
        version: string;
        checksum: string;
        isLatest: boolean;
        isDeprecated: boolean;
        onClickDownload: (collectorType: 'sharphound' | 'azurehound', version: string) => void;
        onClickDownloadChecksum: (collectorType: 'sharphound' | 'azurehound', version: string) => void;
    }[];
}
declare const CollectorCardList: React.FC<CollectorCardListProps>;
export default CollectorCardList;
