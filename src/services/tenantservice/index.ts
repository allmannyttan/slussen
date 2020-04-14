import { Application } from 'express'
import { client } from '../../adapters/fastapiadapter'

const getTenants = async () => {
    const result = await client.get('fi2partner')
    return transformTenants(result)
}

const getSocialSecurityNumber = (ids: any) => {
    const ssnNode = ids.fi2_id.filter((id: any) => { return id.$.usage === 'Ssn' })

    if (ssnNode && ssnNode.length > 0) {
        return ssnNode[0]._
    } else {
        return null
    }
}

const getPart = (parts: any, partName: string) => {
    const partNode = parts.filter((part: any) => { return part.fi2value_code[0] ===  partName})

    console.log(parts)

    if (partNode && partNode.length > 0) {
        return partNode[0].fi2value_value[0]
    } else {
        return null
    }
}

const transformTenant = (tenantRaw: any) => {
    return {
        id: tenantRaw.$.id,
        socialSecurityNumber: getSocialSecurityNumber(tenantRaw.fi2part_ids[0]),
        changedBy: getPart(tenantRaw.fi2part_value, 'ChangedBy'),
        changeDate: getPart(tenantRaw.fi2part_value, 'ChangedDate'),
        createdBy: getPart(tenantRaw.fi2part_value, 'CreatedBy'),
        createDate: getPart(tenantRaw.fi2part_value, 'CreatedDate'),
        name: tenantRaw.fi2part_name ? tenantRaw.fi2part_name[0]._ : null,
        fullName: tenantRaw.fi2part_fullname[0],
    }
}

const transformTenants = (tenantsRaw: any) => {
    if (tenantsRaw.fi2simplemessage && tenantsRaw.fi2simplemessage.fi2partner) {
        return tenantsRaw.fi2simplemessage.fi2partner.map(transformTenant)
    } else {
        return {}
    }
        
}

export const routes = (app: Application) => {
  app.get('/tenant', async (_req, res) => res.json(await getTenants()))
}
