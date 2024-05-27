/// <reference types="react" />
export type EdgeInfoProps = {
    sourceName?: string;
    sourceType?: string;
    targetName?: string;
    targetType?: string;
};
declare const EdgeInfoComponents: {
    GenericAll: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps & {
            targetId: string;
            haslaps: boolean;
        }>;
        linuxAbuse: import("react").FC<EdgeInfoProps & {
            targetId: string;
            haslaps: boolean;
        }>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    MemberOf: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AllExtendedRights: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps & {
            haslaps: boolean;
        }>;
        linuxAbuse: import("react").FC<EdgeInfoProps & {
            haslaps: boolean;
        }>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AdminTo: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    HasSession: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AddMember: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps>;
        linuxAbuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    ForceChangePassword: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps>;
        linuxAbuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    GenericWrite: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps>;
        linuxAbuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    Owns: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps & {
            targetId: string;
            haslaps: boolean;
        }>;
        linuxAbuse: import("react").FC<EdgeInfoProps & {
            targetId: string;
            haslaps: boolean;
        }>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    WriteDacl: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps & {
            targetId: string;
            haslaps: boolean;
        }>;
        linuxAbuse: import("react").FC<EdgeInfoProps & {
            targetId: string;
            haslaps: boolean;
        }>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    WriteOwner: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps & {
            targetId: string;
        }>;
        linuxAbuse: import("react").FC<EdgeInfoProps & {
            haslaps: boolean;
        }>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    CanRDP: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    ExecuteDCOM: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AllowedToDelegate: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC;
        linuxAbuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    GetChanges: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC;
        linuxAbuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    GetChangesAll: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC;
        linuxAbuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    ReadLAPSPassword: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps>;
        linuxAbuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    Contains: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    GPLink: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AddAllowedToAct: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC;
        linuxAbuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AllowedToAct: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<{
            sourceName: string;
        }>;
        linuxAbuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    SQLAdmin: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    ReadGMSAPassword: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC;
        linuxAbuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    HasSIDHistory: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    TrustedBy: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    CanPSRemote: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZAddMembers: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZAddSecret: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZAvereContributor: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZContains: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZContributor: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZExecuteCommand: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZGetCertificates: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZGetKeys: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZGetSecrets: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZHasRole: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZManagedIdentity: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMemberOf: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZOwns: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZPrivilegedAuthAdmin: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZPrivilegedRoleAdmin: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZResetPassword: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZUserAccessAdministrator: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZGlobalAdmin: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZAppAdmin: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZCloudAppAdmin: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZRunsAs: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZVMAdminLogin: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZVMContributor: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    WriteSPN: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps>;
        linuxAbuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AddSelf: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps>;
        linuxAbuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AddKeyCredentialLink: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC<EdgeInfoProps>;
        linuxAbuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    DCSync: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC;
        linuxAbuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    SyncLAPSPassword: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    WriteAccountRestrictions: {
        general: import("react").FC<EdgeInfoProps>;
        windowsAbuse: import("react").FC;
        linuxAbuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    DumpSMSAPassword: {
        general: import("react").FC<EdgeInfoProps>;
        abuse: import("react").FC<EdgeInfoProps>;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGAddMember: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGAddOwner: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGAddSecret: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGGrantAppRoles: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGGrantRole: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGAppRoleAssignment_ReadWrite_All: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGApplication_ReadWrite_All: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGDirectory_ReadWrite_All: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGGroupMember_ReadWrite_All: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGGroup_ReadWrite_All: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGRoleManagement_ReadWrite_Directory: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZMGServicePrincipalEndpoint_ReadWrite_All: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZWebsiteContributor: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZAddOwner: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZAKSContributor: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZAutomationContributor: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZKeyVaultKVContributor: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZLogicAppContributor: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
    AZNodeResourceGroup: {
        general: import("react").FC;
        abuse: import("react").FC;
        opsec: import("react").FC;
        references: import("react").FC;
    };
};
export default EdgeInfoComponents;
