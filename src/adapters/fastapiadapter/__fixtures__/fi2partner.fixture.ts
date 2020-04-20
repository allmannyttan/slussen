export const 
    fi2PartnerFixture = `
<?xml version="1.0"?>
<!--Created using Fi2Express v. 1.31.47 © Bim Alliance 2015 (Licensed to SABO)-->
<fi2simplemessage
    xmlns:meta="http://www.metadata.se/meta/1.10/meta-1.10"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.fi2.se/schemas/1.31 http://www.fi2.se/schemas/1.31/fi2simplemessage.xsd"
    xmlns="http://www.fi2.se/schemas/1.31">
    <fi2messageheader>
        <fi2sender>
            <fi2reference>
                <fi2value_code />
                <fi2value_value />
            </fi2reference>
            <fi2reference>
                <fi2value_code>B</fi2value_code>
                <fi2value_scheme>
                    <fi2scheme_id>VA000_004_002</fi2scheme_id>
                    <fi2scheme_name>Avsändarvärden fi2sender</fi2scheme_name>
                    <fi2scheme_url>http://www.fi2.se/valuelist/VA000_004_002.xml</fi2scheme_url>
                </fi2value_scheme>
                <fi2value_value>fastAPI</fi2value_value>
            </fi2reference>
            <fi2systemidentity />
        </fi2sender>
        <fi2version>1.31</fi2version>
        <fi2messageversion>1.3.3</fi2messageversion>
        <fi2messageid>9b58d12f-2c6d-4577-b404-caa0b2e6e790</fi2messageid>
        <fi2messagedate>2020-04-14T13:20:12.4701547+00:00</fi2messagedate>
        <fi2sessionidentity />
        <fi2messagecount>1</fi2messagecount>
        <fi2messagetask>
            <fi2verb>
                <fi2class_code />
                <fi2class_scheme />
            </fi2verb>
            <fi2noun>
                <fi2class_code />
                <fi2class_scheme />
            </fi2noun>
        </fi2messagetask>
        <fi2confirmation>false</fi2confirmation>
    </fi2messageheader>
    <fi2partner id="12345">
        <fi2part_ids>
            <fi2_id usage="PartnerId">12345</fi2_id>
            <fi2_id usage="Ssn">811010-1010</fi2_id>
        </fi2part_ids>
        <fi2part_class>
            <fi2class_code>16</fi2class_code>
            <fi2class_scheme>
                <fi2scheme_id>CA000_005_003</fi2scheme_id>
                <fi2scheme_name>Klassificering FI2Partner</fi2scheme_name>
                <fi2scheme_url>http://www.fi2.se/classlist/CA000_005_003.xml</fi2scheme_url>
            </fi2class_scheme>
        </fi2part_class>
        <fi2part_value>
            <fi2value_code>ChangedBy</fi2value_code>
            <fi2value_scheme>
                <fi2scheme_id>VB001_005_001</fi2scheme_id>
                <fi2scheme_name>Tillåtna värden för alla typer av fi2objekt</fi2scheme_name>
                <fi2scheme_url>http://www.fi2.se/valuelist/VB001_005_001.xml</fi2scheme_url>
            </fi2value_scheme>
            <fi2value_value>Script</fi2value_value>
        </fi2part_value>
        <fi2part_value>
            <fi2value_code>ChangedDate</fi2value_code>
            <fi2value_scheme>
                <fi2scheme_id>VB001_005_001</fi2scheme_id>
                <fi2scheme_name>Tillåtna värden för alla typer av fi2objekt</fi2scheme_name>
                <fi2scheme_url>http://www.fi2.se/valuelist/VB001_005_001.xml</fi2scheme_url>
            </fi2value_scheme>
            <fi2value_value>2015-11-18T09:21:06</fi2value_value>
        </fi2part_value>
        <fi2part_value>
            <fi2value_code>CreatedBy</fi2value_code>
            <fi2value_scheme>
                <fi2scheme_id>VB001_005_001</fi2scheme_id>
                <fi2scheme_name>Tillåtna värden för alla typer av fi2objekt</fi2scheme_name>
                <fi2scheme_url>http://www.fi2.se/valuelist/VB001_005_001.xml</fi2scheme_url>
            </fi2value_scheme>
            <fi2value_value>Script</fi2value_value>
        </fi2part_value>
        <fi2part_value>
            <fi2value_code>CreatedDate</fi2value_code>
            <fi2value_scheme>
                <fi2scheme_id>VB001_005_001</fi2scheme_id>
                <fi2scheme_name>Tillåtna värden för alla typer av fi2objekt</fi2scheme_name>
                <fi2scheme_url>http://www.fi2.se/valuelist/VB001_005_001.xml</fi2scheme_url>
            </fi2value_scheme>
            <fi2value_value>2015-11-18T09:21:06</fi2value_value>
        </fi2part_value>
        <fi2part_value>
            <fi2value_code>ETag</fi2value_code>
            <fi2value_scheme>
                <fi2scheme_id>VB001_005_001</fi2scheme_id>
                <fi2scheme_name>Tillåtna värden för alla typer av fi2objekt</fi2scheme_name>
                <fi2scheme_url>http://www.fi2.se/valuelist/VB001_005_001.xml</fi2scheme_url>
            </fi2value_scheme>
            <fi2value_value>2015-11-18T09:21:06.660</fi2value_value>
        </fi2part_value>
        <fi2part_name lang="sv" usage="Default">Anna</fi2part_name>
        <fi2part_fullname>Anna Jansson</fi2part_fullname>
        <fi2part_reference>En referens.</fi2part_reference>
        <fi2part_tel usage="Home">12345-123456</fi2part_tel>
        <fi2part_tel usage="Work">12345-123456</fi2part_tel>
        <fi2part_tel usage="MobilePrivate">12345-123456</fi2part_tel>
        <fi2part_tel usage="MobileWork">12345-123456</fi2part_tel>
        <fi2part_tel usage="Fax">12345-123456</fi2part_tel>
        <fi2part_email usage="Private">12345@12345.com</fi2part_email>
        <fi2part_email usage="Work">12345@12345.com</fi2part_email>
        <fi2part_web>www.exempelurl12345.com</fi2part_web>
        <fi2part_address guid="DECE1A01-9ADA-495C-9341-426A198F61F4">
            <fi2addr_class>
                <fi2class_code>03</fi2class_code>
                <fi2class_scheme>
                    <fi2scheme_id>CA000_007_003</fi2scheme_id>
                    <fi2scheme_name>Klassificering av adresser</fi2scheme_name>
                    <fi2scheme_url>http://www.fi2.se/classlist/CA000_007_003.xml</fi2scheme_url>
                </fi2class_scheme>
            </fi2addr_class>
            <fi2addr_descr lang="sv">Exempeladress</fi2addr_descr>
            <fi2addr_addrline usage="Street">Norravägen 277</fi2addr_addrline>
            <fi2addr_addrline usage="CO">278</fi2addr_addrline>
            <fi2addr_addrline usage="Box">798</fi2addr_addrline>
            <fi2addr_addrline usage="Att">836</fi2addr_addrline>
            <fi2addr_zipcode>79111</fi2addr_zipcode>
            <fi2addr_city>Askersund</fi2addr_city>
            <fi2addr_country>SE</fi2addr_country>
            <fi2addr_region>Norr</fi2addr_region>
            <fi2addr_tel usage="Home">00570239</fi2addr_tel>
            <fi2addr_tel usage="Work">05464241</fi2addr_tel>
            <fi2addr_tel usage="MobilePrivate">070851010</fi2addr_tel>
            <fi2addr_tel usage="MobileWork">070808788</fi2addr_tel>
            <fi2addr_tel usage="Fax">81388</fi2addr_tel>
        </fi2part_address>
        <fi2part_address guid="AEB1A38F-A0BB-4132-A1A0-E7998A09C37D">
            <fi2addr_class>
                <fi2class_code>05</fi2class_code>
                <fi2class_scheme>
                    <fi2scheme_id>CA000_007_003</fi2scheme_id>
                    <fi2scheme_name>Klassificering av adresser</fi2scheme_name>
                    <fi2scheme_url>http://www.fi2.se/classlist/CA000_007_003.xml</fi2scheme_url>
                </fi2class_scheme>
            </fi2addr_class>
            <fi2addr_descr lang="sv">Postal exempeladress</fi2addr_descr>
            <fi2addr_addrline usage="Street">Exempelgatan 234</fi2addr_addrline>
            <fi2addr_addrline usage="CO">234</fi2addr_addrline>
            <fi2addr_addrline usage="Box">222</fi2addr_addrline>
            <fi2addr_addrline usage="Att">289</fi2addr_addrline>
            <fi2addr_zipcode>22233</fi2addr_zipcode>
            <fi2addr_city>Yrboda</fi2addr_city>
            <fi2addr_country>SE</fi2addr_country>
            <fi2addr_region>Mitt</fi2addr_region>
            <fi2addr_tel usage="Home">20789655</fi2addr_tel>
            <fi2addr_tel usage="Work">20889656</fi2addr_tel>
            <fi2addr_tel usage="MobilePrivate">20789645</fi2addr_tel>
            <fi2addr_tel usage="MobileWork">20889636</fi2addr_tel>
            <fi2addr_tel usage="Fax">20789695</fi2addr_tel>
        </fi2part_address>
        <fi2part_contact guid="61676032-7619-499F-B0AC-75F1849EFA18">
            <fi2contact_class>
                <fi2class_code>Primary</fi2class_code>
                <fi2class_scheme>
                    <fi2scheme_id>CB001_006_001</fi2scheme_id>
                    <fi2scheme_name>Klassificering av kontaktinformation</fi2scheme_name>
                    <fi2scheme_url>http://www.fi2.se/classlist/CB001_006_001.xml</fi2scheme_url>
                </fi2class_scheme>
            </fi2contact_class>
            <fi2cont_fname>Anna</fi2cont_fname>
            <fi2cont_mname>Eva</fi2cont_mname>
            <fi2cont_lname>Ibrahimovic</fi2cont_lname>
            <fi2cont_fullname>Anna Ibrahimovic</fi2cont_fullname>
            <fi2cont_tel usage="Home">9566-463288</fi2cont_tel>
            <fi2cont_tel usage="Work">5938-191763</fi2cont_tel>
            <fi2cont_tel usage="MobilePrivate">070-9167130</fi2cont_tel>
            <fi2cont_tel usage="MobileWork">12345</fi2cont_tel>
            <fi2cont_tel usage="Fax">12345</fi2cont_tel>
            <fi2cont_email usage="Private">Anna.Ibrahimovic@Hemma.se</fi2cont_email>
            <fi2cont_email usage="Work">Anna.Ibrahimovic@jobbet.se</fi2cont_email>
            <fi2cont_address guid="DECE1A01-9ADA-495C-9341-426A198F61F4">
                <fi2addr_class>
                    <fi2class_code>03</fi2class_code>
                    <fi2class_scheme>
                        <fi2scheme_id>CA000_007_003</fi2scheme_id>
                        <fi2scheme_name>Klassificering av adresser</fi2scheme_name>
                        <fi2scheme_url>http://www.fi2.se/classlist/CA000_007_003.xml</fi2scheme_url>
                    </fi2class_scheme>
                </fi2addr_class>
                <fi2addr_descr lang="sv">Exempeladress</fi2addr_descr>
                <fi2addr_addrline usage="Street">Norravägen 277</fi2addr_addrline>
                <fi2addr_addrline usage="CO">278</fi2addr_addrline>
                <fi2addr_addrline usage="Box">798</fi2addr_addrline>
                <fi2addr_addrline usage="Att">836</fi2addr_addrline>
                <fi2addr_zipcode>79111</fi2addr_zipcode>
                <fi2addr_city>Askersund</fi2addr_city>
                <fi2addr_country>SE</fi2addr_country>
                <fi2addr_region>Norr</fi2addr_region>
                <fi2addr_tel usage="Home">00570239</fi2addr_tel>
                <fi2addr_tel usage="Work">05464241</fi2addr_tel>
                <fi2addr_tel usage="MobilePrivate">070851010</fi2addr_tel>
                <fi2addr_tel usage="MobileWork">070808788</fi2addr_tel>
                <fi2addr_tel usage="Fax">81388</fi2addr_tel>
            </fi2cont_address>
        </fi2part_contact>
    </fi2partner>
</fi2simplemessage>`
