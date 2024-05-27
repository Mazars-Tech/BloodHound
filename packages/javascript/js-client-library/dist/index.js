import axios from 'axios';

// Copyright 2023 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0
class BHEAPIClient {
    baseClient;
    constructor(config) {
        this.baseClient = axios.create(config);
    }
    /* health */
    health = (options) => this.baseClient.get('/health', options);
    /* version */
    version = (options) => this.baseClient.get('/api/version', options);
    /* datapipe status */
    getDatapipeStatus = (options) => this.baseClient.get('/api/v2/datapipe/status', options);
    /* search */
    searchHandler = (keyword, type, options) => {
        return this.baseClient.get('/api/v2/search', Object.assign({
            params: {
                q: keyword,
                type: type,
            },
            headers: {
                Prefer: 'wait=60',
            },
        }, options));
    };
    cypherSearch = (query, includeProperties, options) => {
        return this.baseClient.post('/api/v2/graphs/cypher', { query, include_properties: includeProperties }, options);
    };
    getUserSavedQueries = (options) => {
        return this.baseClient.get('/api/v2/saved-queries', Object.assign({
            params: {
                sort_by: 'name',
            },
        }, options));
    };
    createUserQuery = (payload, options) => {
        return this.baseClient.post('/api/v2/saved-queries', payload, options);
    };
    deleteUserQuery = (queryId, options) => {
        return this.baseClient.delete(`/api/v2/saved-queries/${queryId}`, options);
    };
    getAvailableDomains = (options) => this.baseClient.get('/api/v2/available-domains', options);
    /* audit */
    getAuditLogs = (options) => this.baseClient.get('/api/v2/audit', options);
    /* asset groups */
    createAssetGroup = (assetGroup, options) => this.baseClient.post('/api/v2/asset-groups', assetGroup, options);
    getAssetGroup = (assetGroupId, options) => this.baseClient.get(`/api/v2/asset-groups/${assetGroupId}`, options);
    deleteAssetGroup = (assetGroupId, options) => this.baseClient.delete(`/api/v2/asset-groups/${assetGroupId}`, options);
    updateAssetGroup = (assetGroupId, assetGroup, options) => this.baseClient.put(`/api/v2/asset-groups/${assetGroupId}`, assetGroup, options);
    updateAssetGroupSelector = (assetGroupId, selectorChangeset, options) => this.baseClient.post(`/api/v2/asset-groups/${assetGroupId}/selectors`, selectorChangeset, options);
    deleteAssetGroupSelector = (assetGroupId, selectorId, options) => this.baseClient.delete(`/api/v2/asset-groups/${assetGroupId}/selectors/${selectorId}`, options);
    listAssetGroupCollections = (assetGroupId, options) => this.baseClient.get(`/api/v2/asset-groups/${assetGroupId}/collections`, options);
    listAssetGroups = (options) => this.baseClient.get('/api/v2/asset-groups', options);
    /* analysis */
    getComboTreeGraph = (domainId, nodeId = null, options) => this.baseClient.get(`/api/v2/meta-trees/${domainId}`, Object.assign({ params: nodeId && { node_id: nodeId } }, options));
    getLatestTierZeroComboNode = (domainId, options) => this.baseClient.get(`/api/v2/meta-nodes/${domainId}`, options);
    getAssetGroupComboNode = (assetGroupId, domainsid, options) => {
        return this.baseClient.get(`/api/v2/asset-groups/${assetGroupId}/combo-node`, Object.assign({
            params: { domainsid: domainsid },
        }, options));
    };
    /* qa */
    getADQualityStats = (domainId, start, end, limit, sort_by, options) => {
        return this.baseClient.get(`/api/v2/ad-domains/${domainId}/data-quality-stats`, Object.assign({
            params: {
                start: start?.toISOString(),
                end: end?.toISOString(),
                limit: limit,
                sort_by: sort_by,
            },
        }, options));
    };
    getAzureQualityStats = (tenantId, start, end, limit, sort_by, options) => {
        return this.baseClient.get(`/api/v2/azure-tenants/${tenantId}/data-quality-stats`, Object.assign({
            params: {
                start: start?.toISOString(),
                end: end?.toISOString(),
                limit: limit,
                sort_by: sort_by,
            },
        }, options));
    };
    getPlatformQualityStats = (platformtype, start, end, limit, sort_by, options) => {
        return this.baseClient.get(`/api/v2/platform/${platformtype}/data-quality-stats`, Object.assign({
            params: {
                start: start?.toISOString(),
                end: end?.toISOString(),
                limit: limit,
                sort_by: sort_by,
            },
        }, options));
    };
    getPostureStats = (from, to, domainSID, sortBy, options) => {
        const params = {
            from: from.toISOString(),
            to: to.toISOString(),
        };
        if (domainSID)
            params.domain_sid = `eq:${domainSID}`;
        if (sortBy)
            params.sort_by = sortBy;
        return this.baseClient.get('/api/v2/posture-stats', Object.assign({
            params: params,
        }, options));
    };
    /* ingest */
    ingestData = (options) => this.baseClient.post('/api/v2/ingest', options);
    getPathfindingResult = (startNode, endNode, options) => this.baseClient.get('/api/v2/pathfinding', Object.assign({
        params: {
            start_node: startNode,
            end_node: endNode,
        },
    }, options));
    getSearchResult = (query, searchType, options) => this.baseClient.get('/api/v2/graph-search', Object.assign({
        params: {
            query: query,
            type: searchType,
        },
    }, options));
    /* clients */
    getClients = (skip = 0, limit = 10, hydrateDomains, hydrateOUs, options) => this.baseClient.get('/api/v2/clients', Object.assign({
        params: {
            skip,
            limit,
            hydrate_domains: hydrateDomains,
            hydrate_ous: hydrateOUs,
        },
    }, options));
    createClient = (client, options) => this.baseClient.post('/api/v2/clients', client, options);
    getClient = (clientId, options) => this.baseClient.get(`/api/v2/clients/${clientId}`, options);
    updateClient = (clientId, client, options) => this.baseClient.put(`/api/v2/clients/${clientId}`, client, options);
    regenerateClientToken = (clientId, options) => this.baseClient.put(`/api/v2/clients/${clientId}/token`, options);
    deleteClient = (clientId, options) => this.baseClient.delete(`/api/v2/clients/${clientId}`, options);
    getClientCompletedJobs = (clientId, skip, limit, options) => this.baseClient.get(`/api/v2/clients/${clientId}/completed-jobs`, Object.assign({
        params: {
            skip,
            limit,
        },
    }, options));
    createScheduledJob = (clientId, scheduledJob, options) => this.baseClient.post(`/api/v2/clients/${clientId}/jobs`, scheduledJob, options);
    getFinishedJobs = (skip, limit, hydrateDomains, hydrateOUs, options) => this.baseClient.get(`/api/v2/jobs/finished`, Object.assign({
        params: {
            skip,
            limit,
            hydrate_domains: hydrateDomains,
            hydrate_ous: hydrateOUs,
        },
    }, options));
    /* events */
    getEvents = (hydrateDomains, hydrateOUs, options) => this.baseClient.get('/api/v2/events', Object.assign({
        params: {
            hydrate_domains: hydrateDomains,
            hydrate_ous: hydrateOUs,
        },
    }, options));
    getEvent = (eventId, options) => this.baseClient.get(`/api/v2/events/${eventId}`, options);
    createEvent = (event, options) => this.baseClient.post('/api/v2/events', event, options);
    updateEvent = (eventId, event, options) => this.baseClient.put(`/api/v2/events/${eventId}`, event, options);
    deleteEvent = (eventId, options) => this.baseClient.delete(`/api/v2/events/${eventId}`, options);
    /* file ingest */
    listFileIngestJobs = (skip, limit, sortBy) => this.baseClient.get('api/v2/file-upload', Object.assign({
        params: {
            skip,
            limit,
            sort_by: sortBy,
        },
    }));
    startFileIngest = () => this.baseClient.post('/api/v2/file-upload/start');
    uploadFileToIngestJob = (ingestId, json) => {
        return this.baseClient.post(`/api/v2/file-upload/${ingestId}`, json);
    };
    endFileIngest = (ingestId) => this.baseClient.post(`/api/v2/file-upload/${ingestId}/end`);
    /* jobs */
    getJobs = (hydrateDomains, hydrateOUs, options) => this.baseClient.get('/api/v2/jobs', Object.assign({
        params: {
            hydrate_domains: hydrateDomains,
            hydrate_ous: hydrateOUs,
        },
    }, options));
    getJob = (jobId, options) => this.baseClient.get(`/api/v2/jobs/${jobId}`, options);
    cancelScheduledJob = (jobId, options) => this.baseClient.put(`/api/v2/jobs/${jobId}/cancel`, undefined, options);
    getJobLogFile = (jobId, options) => this.baseClient.get(`/api/v2/jobs/${jobId}/log`, options);
    getRiskDetails = (domainId, finding, skip, limit, filterAccepted, options) => {
        const params = {
            finding: finding,
            skip: skip,
            limit: limit,
        };
        if (typeof filterAccepted === 'boolean')
            params.Accepted = `eq:${filterAccepted}`;
        return this.baseClient.get(`/api/v2/domains/${domainId}/details`, Object.assign({
            params: params,
        }, options));
    };
    getRiskSparklineValues = (domainId, finding, from, to, sortBy, options) => this.baseClient.get(`/api/v2/domains/${domainId}/sparkline`, Object.assign({
        params: {
            finding,
            from: from?.toISOString(),
            to: to?.toISOString(),
            sort_by: sortBy,
        },
    }, options));
    changeRiskAcceptance = (attackPathId, riskType, accepted, acceptUntil, options) => this.baseClient.put(`/api/v2/attack-paths/${attackPathId}/acceptance`, {
        risk_type: riskType,
        accepted: accepted,
        accept_until: acceptUntil && acceptUntil.toISOString(),
    }, options);
    genRisks = (options) => this.baseClient.put('/api/v2/attack-paths', options);
    getAvailableRiskTypes = (domainId, sortBy, options) => this.baseClient.get(`/api/v2/domains/${domainId}/available-types`, Object.assign({
        params: {
            sort_by: sortBy,
        },
    }, options));
    exportRiskFindings = (domainId, findingType, accepted, options) => this.baseClient.get(`/api/v2/domains/${domainId}/attack-path-findings`, Object.assign({
        params: {
            finding: findingType,
            accepted: accepted,
        },
        responseType: 'blob',
    }, options));
    /* auth */
    login = (credentials, options) => this.baseClient.post('/api/v2/login', credentials, options);
    getSelf = (options) => this.baseClient.get('/api/v2/self', options);
    logout = (options) => this.baseClient.post('/api/v2/logout', options);
    listSAMLSignOnEndpoints = (options) => this.baseClient.get('/api/v2/saml/sso', options);
    listSAMLProviders = (options) => this.baseClient.get(`/api/v2/saml`, options);
    getSAMLProvider = (samlProviderId, options) => this.baseClient.get(`/api/v2/saml/providers/${samlProviderId}`, options);
    createSAMLProvider = (data, options) => this.baseClient.post(`/api/v2/saml`, {
        name: data.name,
        display_name: data.displayName,
        signing_certificate: data.signingCertificate,
        issuer_uri: data.issuerUri,
        single_signon_uri: data.singleSignOnUri,
        principal_attribute_mappings: data.principalAttributeMappings,
    }, options);
    createSAMLProviderFromFile = (data, options) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('metadata', data.metadata);
        return this.baseClient.post(`/api/v2/saml/providers`, formData, options);
    };
    validateSAMLProvider = (data, options) => this.baseClient.post(`/api/v2/saml/validate-idp`, {
        name: data.name,
        display_name: data.displayName,
        signing_certificate: data.signingCertificate,
        issuer_uri: data.issuerUri,
        single_signon_uri: data.singleSignOnUri,
        principal_attribute_mappings: data.principalAttributeMappings,
    }, options);
    deleteSAMLProvider = (SAMLProviderId, options) => this.baseClient.delete(`/api/v2/saml/providers/${SAMLProviderId}`, options);
    permissionList = (options) => this.baseClient.get('/api/v2/permissions', options);
    permissionGet = (permissionId, options) => this.baseClient.get(`/api/v2/permissions/${permissionId}`, options);
    getRoles = (options) => this.baseClient.get(`/api/v2/roles`, options);
    getRole = (roleId, options) => this.baseClient.get(`/api/v2/roles/${roleId}`, options);
    getUserTokens = (userId, options) => this.baseClient.get(`/api/v2/tokens`, Object.assign({
        params: {
            user_id: `eq:${userId}`,
        },
    }, options));
    createUserToken = (userId, tokenName, options) => this.baseClient.post(`/api/v2/tokens`, {
        user_id: userId,
        token_name: tokenName,
    }, options);
    deleteUserToken = (tokenId, options) => this.baseClient.delete(`/api/v2/tokens/${tokenId}`, options);
    listUsers = (options) => this.baseClient.get('/api/v2/bloodhound-users', options);
    getUser = (userId, options) => this.baseClient.get(`/api/v2/bloodhound-users/${userId}`, options);
    createUser = (user, options) => this.baseClient.post('/api/v2/bloodhound-users', {
        first_name: user.firstName,
        last_name: user.lastName,
        email_address: user.emailAddress,
        principal: user.principal,
        roles: user.roles,
        saml_provider_id: user.SAMLProviderId,
        secret: user.password,
        needs_password_reset: user.needsPasswordReset,
    }, options);
    updateUser = (userId, user, options) => this.baseClient.patch(`/api/v2/bloodhound-users/${userId}`, {
        first_name: user.firstName,
        last_name: user.lastName,
        email_address: user.emailAddress,
        principal: user.principal,
        roles: user.roles,
        saml_provider_id: user.SAMLProviderId,
        is_disabled: user.is_disabled,
    }, options);
    deleteUser = (userId, options) => this.baseClient.delete(`/api/v2/bloodhound-users/${userId}`, options);
    expireUserAuthSecret = (userId, options) => this.baseClient.delete(`/api/v2/bloodhound-users/${userId}/secret`, options);
    putUserAuthSecret = (userId, userSecret, options) => this.baseClient.put(`/api/v2/bloodhound-users/${userId}/secret`, userSecret, options);
    enrollMFA = (userId, data, options) => this.baseClient.post(`/api/v2/bloodhound-users/${userId}/mfa`, data, options);
    disenrollMFA = (userId, data, options) => this.baseClient.delete(`/api/v2/bloodhound-users/${userId}/mfa`, Object.assign({
        headers: { 'Content-Type': 'application/json' },
        data,
    }, options));
    getMFAActivationStatus = (userId, options) => this.baseClient.get(`/api/v2/bloodhound-users/${userId}/mfa-activation`, options);
    activateMFA = (userId, data, options) => this.baseClient.post(`/api/v2/bloodhound-users/${userId}/mfa-activation`, data, options);
    acceptEULA = (options) => this.baseClient.put('/api/v2/accept-eula', options);
    getFeatureFlags = (options) => this.baseClient.get('/api/v2/features', options);
    toggleFeatureFlag = (flagId, options) => this.baseClient.put(`/api/v2/features/${flagId}/toggle`, options);
    getCollectors = (collectorType, options) => this.baseClient.get(`/api/v2/collectors/${collectorType}`, options);
    downloadCollector = (collectorType, version, options) => this.baseClient.get(`/api/v2/collectors/${collectorType}/${version}`, Object.assign({
        responseType: 'blob',
    }, options));
    downloadCollectorChecksum = (collectorType, version, options) => this.baseClient.get(`/api/v2/collectors/${collectorType}/${version}/checksum`, Object.assign({
        responseType: 'blob',
    }, options));
    //Entity Endpoints
    getAZEntityInfoV2 = (entityType, id, relatedEntityType, counts, skip, limit, type, options) => this.baseClient.get(`/api/v2/azure/${entityType}`, Object.assign({
        params: {
            object_id: id,
            related_entity_type: relatedEntityType,
            counts,
            skip,
            limit,
            type,
        },
    }, options));
    getBaseV2 = (id, counts, options) => this.baseClient.get(`/api/v2/base/${id}`, Object.assign({
        params: {
            counts,
        },
    }, options));
    getBaseControllablesV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/base/${id}/controllables`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getBaseControllersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/base/${id}/controllers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerV2 = (id, counts, options) => this.baseClient.get(`/api/v2/computers/${id}`, Object.assign({
        params: {
            counts,
        },
    }, options));
    getComputerSessionsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/sessions`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerAdminUsersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/admin-users`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerRDPUsersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/rdp-users`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerDCOMUsersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/dcom-users`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerPSRemoteUsersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/ps-remote-users`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerSQLAdminsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/sql-admins`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerGroupMembershipV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/group-membership`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerAdminRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/admin-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerRDPRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/rdp-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerDCOMRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/dcom-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerPSRemoteRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/ps-remote-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerConstrainedUsersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/constrained-users`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerConstrainedDelegationRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/constrained-delegation-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerControllersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/controllers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getComputerControllablesV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/computers/${id}/controllables`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainV2 = (id, counts, options) => this.baseClient.get(`/api/v2/domains/${id}`, Object.assign({
        params: {
            counts,
        },
    }, options));
    getDomainUsersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/users`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainGroupsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/groups`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainComputersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/computers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainOUsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/ous`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainGPOsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/gpos`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainForeignUsersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/foreign-users`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainForeignGroupsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/foreign-groups`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainForeignAdminsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/foreign-admins`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainForeignGPOControllersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/foreign-gpo-controllers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainInboundTrustsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/inbound-trusts`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainOutboundTrustsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/outbound-trusts`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainControllersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/controllers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainDCSyncersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/dc-syncers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getDomainLinkedGPOsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/domains/${id}/linked-gpos`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGPOV2 = (id, counts, options) => this.baseClient.get(`/api/v2/gpos/${id}`, Object.assign({
        params: {
            counts,
        },
    }, options));
    getGPOOUsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/gpos/${id}/ous`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGPOComputersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/gpos/${id}/computers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGPOUsersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/gpos/${id}/users`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGPOControllersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/gpos/${id}/controllers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGPOTierZeroV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/gpos/${id}/tier-zero`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getOUV2 = (id, counts, options) => this.baseClient.get(`/api/v2/ous/${id}`, Object.assign({
        params: {
            counts,
        },
    }, options));
    getOUGPOsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/ous/${id}/gpos`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getOUUsersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/ous/${id}/users`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getOUGroupsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/ous/${id}/groups`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getOUComputersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/ous/${id}/computers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getUserV2 = (id, counts, options) => this.baseClient.get(`/api/v2/users/${id}`, Object.assign({
        params: {
            counts,
        },
    }, options));
    getUserSessionsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/users/${id}/sessions`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getUserMembershipsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/users/${id}/memberships`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getUserAdminRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/users/${id}/admin-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getUserRDPRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/users/${id}/rdp-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getUserDCOMRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/users/${id}/dcom-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getUserPSRemoteRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/users/${id}/ps-remote-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getUserSQLAdminRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/users/${id}/sql-admin-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getUserConstrainedDelegationRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/users/${id}/constrained-delegation-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getUserControllersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/users/${id}/controllers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getUserControllablesV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/users/${id}/controllables`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGroupV2 = (id, counts, options) => this.baseClient.get(`/api/v2/groups/${id}`, Object.assign({
        params: {
            counts,
        },
    }, options));
    getGroupSessionsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/groups/${id}/sessions`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGroupMembersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/groups/${id}/members`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGroupMembershipsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/groups/${id}/memberships`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGroupAdminRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/groups/${id}/admin-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGroupRDPRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/groups/${id}/rdp-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGroupDCOMRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/groups/${id}/dcom-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGroupPSRemoteRightsV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/groups/${id}/ps-remote-rights`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGroupControllablesV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/groups/${id}/controllables`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getGroupControllersV2 = (id, skip, limit, type, options) => this.baseClient.get(`/api/v2/groups/${id}/controllers`, Object.assign({
        params: {
            skip,
            limit,
            type,
        },
    }, options));
    getMetaV2 = (id, options) => this.baseClient.get(`/api/v2/meta/${id}`, options);
    getShortestPathV2 = (startNode, endNode, relationshipKinds, options) => this.baseClient.get('/api/v2/graphs/shortest-path', Object.assign({
        params: {
            start_node: startNode,
            end_node: endNode,
            relationship_kinds: relationshipKinds,
        },
    }, options));
}

// Copyright 2023 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

export { BHEAPIClient as default };
