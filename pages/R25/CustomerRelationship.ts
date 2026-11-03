import { BasePage } from '../BasePage';
import { Locator, Page } from '@playwright/test';


export class R25_CustomerRelationship extends BasePage {


readonly page: Page;


readonly ddlCustomerRelationship: Locator;
readonly ddlPerson: Locator;
readonly btnInputProspectPerson: Locator;
readonly btnInputPersonRecordsOtherThanProspect: Locator;
readonly btnAmendPersonRecords: Locator;
readonly btnAuthoriseDeletePersonRecords: Locator;

readonly ddlEntity: Locator;
readonly btnInputProspectEntity: Locator;
readonly btnInputEntityRecordsOtherThanProspect: Locator;
readonly btnAmendEntityRecords: Locator;
readonly btnAuthoriseDeleteEntityRecords: Locator;

readonly ddlCustomerRelationGroup: Locator;
readonly btnInputCustomerRelationGroupRecords: Locator;
readonly btnAmendCustomerRelationGroupRecords: Locator;
readonly btnAuthoriseDeleteCustomerRelationGroup: Locator;

readonly ddlCustomerGroup: Locator;
readonly btnInputAmendCustomerGroup: Locator;
readonly btnAuthoriseCustomerGroup: Locator;
readonly btnHideReverseRelation: Locator;
readonly btnAggregateRelations: Locator;
readonly btnHideAggregateRelation: Locator;
readonly ddlCustomerGroupChange: Locator;
readonly btnViewCustomerGroupChange: Locator;
readonly btnAmendCustomerGroupChange: Locator;
readonly btnAuthoriseCustomerGroupChange: Locator; 
readonly btnCustomerGroupGraphicalView: Locator;

readonly ddlCustomerRelationshipRecords: Locator;
readonly btnInputCustomerRelationshipRecords: Locator;
readonly btnAmendCustomerRelationshipRecords: Locator;
readonly btnAuthoriseDeleteCustomerRelationshipRecords: Locator;

readonly ddlEnquiries: Locator;
readonly btnPersonEntity: Locator;
readonly btnCustomerRelationGroupEnquiry: Locator;
readonly btnCustomerRelationshipEnquiry: Locator;
readonly btnCustomerRelationshipByGroup: Locator;
readonly btnCustomerRelationshipByCustomer: Locator;
readonly btnJointCustomerTransactionReferenceEnquiry: Locator;
readonly btnJointCustomerRelationshipEnquiry: Locator;
readonly btnJointCustomerEnquiry: Locator;

readonly ddlPartyRelationship: Locator;
readonly btnInputPartyRelationship: Locator;
readonly btnViewAmendPartyRelationship: Locator;

constructor(page: Page) {
    super(page);

    this.page = page;



    // Customer Relationship
    this.ddlCustomerRelationship = page.locator('//span[text()=" Customer Relationship "]');

    //Person
    this.ddlPerson = page.locator('//span[text()=" Person "]');
    this.btnInputProspectPerson = page.locator('//a[text()=" Input Prospect (Person) "]');
    this.btnInputPersonRecordsOtherThanProspect = page.locator('//a[text()=" Input Person records (Other than Prospect) "]');
    this.btnAmendPersonRecords = page.locator('//a[text()=" Amend Person records "]');
    this.btnAuthoriseDeletePersonRecords = page.locator('//a[text()=" Authorise / Delete Person records "]');

    // Entity
    this.ddlEntity = page.locator('//span[text()=" Entity "]');
    this.btnInputProspectEntity = page.locator('//a[text()=" Input Prospect (Entity) "]');
    this.btnInputEntityRecordsOtherThanProspect = page.locator('//a[text()=" Input Entity records (Other than Prospect) "]');
    this.btnAmendEntityRecords = page.locator('//a[text()=" Amend Entity records "]');
    this.btnAuthoriseDeleteEntityRecords = page.locator('//a[text()=" Authorise / Delete Entity records "]');

    // Customer Relation Group
    this.ddlCustomerRelationGroup = page.locator('//span[text()=" Customer Relation Group "]');
    this.btnInputCustomerRelationGroupRecords = page.locator('//a[text()=" Input Customer Relation Group records "]');
    this.btnAmendCustomerRelationGroupRecords = page.locator('//a[text()=" Amend Customer Relation Group records "]');
    this.btnAuthoriseDeleteCustomerRelationGroup = page.locator('//a[text()=" Authorise / Delete Customer Relation Group "]');

    // Customer Group
    this.ddlCustomerGroup = page.locator('//span[text()=" Customer Group "]');
    this.btnInputAmendCustomerGroup = page.locator('//a[text()=" Input/Amend Customer Group "]');
    this.btnAuthoriseCustomerGroup = page.locator('//a[text()=" Authorise Customer Group "]');
    this.btnHideReverseRelation = page.locator('//a[text()=" Hide Reverse Relation "]');
    this.btnAggregateRelations = page.locator('//a[text()=" Aggregate Relations "]');
    this.btnHideAggregateRelation = page.locator('//a[text()=" Hide Aggregate Relation "]');
    this.ddlCustomerGroupChange = page.locator('//span[text()=" Customer Group Change "]');
    this.btnViewCustomerGroupChange = page.locator('//a[text()=" View Customer Group Change "]')
    this.btnAmendCustomerGroupChange = page.locator('//a[text()=" Amend Customer Group Change "]')
    this.btnAuthoriseCustomerGroupChange= page.locator('//a[text()=" Authorise Customer Group Change "]')
    this.btnCustomerGroupGraphicalView = page.locator('//a[text()=" Customer Group Graphical View "]');

    // Customer Relationship Records
    this.ddlCustomerRelationshipRecords = page.locator('//span[text()=" Customer Relationship "]');
    this.btnInputCustomerRelationshipRecords = page.locator('//a[text()=" Input Customer Relationship records "]');
    this.btnAmendCustomerRelationshipRecords = page.locator('//a[text()=" Amend Customer Relationship records "]');
    this.btnAuthoriseDeleteCustomerRelationshipRecords = page.locator('//a[text()=" Authorise / Delete Customer Relationship recs "]');

    // Enquiries
    this.ddlEnquiries = page.locator('//span[text()=" Enquiries "]');
    this.btnPersonEntity = page.locator('//a[text()=" Person Entity "]');
    this.btnCustomerRelationGroupEnquiry = page.locator('//a[text()=" Customer Relation Group "]');
    this.btnCustomerRelationshipEnquiry = page.locator('//a[text()=" Customer Relationship "]');
    this.btnCustomerRelationshipByGroup = page.locator('//a[text()=" Customer Relationship by Group "]');
    this.btnCustomerRelationshipByCustomer = page.locator('//a[text()=" Customer Relationship by Customer "]');
    this.btnJointCustomerTransactionReferenceEnquiry = page.locator('//a[text()=" Joint Customer Transaction Reference Enquiry "]');
    this.btnJointCustomerRelationshipEnquiry = page.locator('//a[text()=" Joint Customer Relationship Enquiry "]');
    this.btnJointCustomerEnquiry = page.locator('//a[text()=" Joint Customer Enquiry "]');

    // Party Relationship
    this.ddlPartyRelationship = page.locator('//span[text()=" Party Relationship "]');
    this.btnInputPartyRelationship = page.locator('//a[text()=" Input Party Relationship "]');
    this.btnViewAmendPartyRelationship = page.locator('//a[text()=" View/Amend Party Relationship "]');
}

 //*****************************PAGE FUNCTIONS or COMPONENTS**************************************** */


async clickCustomerRelationship() {
    await this.ddlCustomerRelationship.click();
}

async clickPerson() {
    await this.ddlPerson.click();
}

async clickInputProspectPerson() {
    await this.btnInputProspectPerson.click();
}

async clickInputPersonRecordsOtherThanProspect() {
    await this.btnInputPersonRecordsOtherThanProspect.click();
}

async clickAmendPersonRecords() {
    await this.btnAmendPersonRecords.click();
}

async clickAuthoriseDeletePersonRecords() {
    await this.btnAuthoriseDeletePersonRecords.click();
}

async clickEntity() {
    await this.ddlEntity.click();
}

async clickInputProspectEntity() {
    await this.btnInputProspectEntity.click();
}

async clickInputEntityRecordsOtherThanProspect() {
    await this.btnInputEntityRecordsOtherThanProspect.click();
}

async clickAmendEntityRecords() {
    await this.btnAmendEntityRecords.click();
}

async clickAuthoriseDeleteEntityRecords() {
    await this.btnAuthoriseDeleteEntityRecords.click();
}

async clickCustomerRelationGroup() {
    await this.ddlCustomerRelationGroup.click();
}

async clickInputCustomerRelationGroupRecords() {
    await this.btnInputCustomerRelationGroupRecords.click();
}

async clickAmendCustomerRelationGroupRecords() {
    await this.btnAmendCustomerRelationGroupRecords.click();
}

async clickAuthoriseDeleteCustomerRelationGroup() {
    await this.btnAuthoriseDeleteCustomerRelationGroup.click();
}

async clickCustomerGroup() {
    await this.ddlCustomerGroup.click();
}

async clickInputAmendCustomerGroup() {
    await this.btnInputAmendCustomerGroup.click();
}

async clickAuthoriseCustomerGroup() {
    await this.btnAuthoriseCustomerGroup.click();
}

async clickHideReverseRelation() {
    await this.btnHideReverseRelation.click();
}

async clickAggregateRelations() {
    await this.btnAggregateRelations.click();
}

async clickHideAggregateRelation() {
    await this.btnHideAggregateRelation.click();
}

async clickCustomerGroupChange() {
    await this.ddlCustomerGroupChange.click();
}

async clickViewCustomerGroupChange() {
    await this.btnViewCustomerGroupChange.click();
}

async clickAmendCustomerGroupChange() {
    await this.btnAmendCustomerGroupChange.click();
}

async clickAuthoriseCustomerGroupChange() {
    await this.btnAuthoriseCustomerGroupChange.click();
}

async clickCustomerGroupGraphicalView() {
    await this.btnCustomerGroupGraphicalView.click();
}

async clickCustomerRelationshipRecords() {
    await this.ddlCustomerRelationshipRecords.click();
}

async clickInputCustomerRelationshipRecords() {
    await this.btnInputCustomerRelationshipRecords.click();
}

async clickAmendCustomerRelationshipRecords() {
    await this.btnAmendCustomerRelationshipRecords.click();
}

async clickAuthoriseDeleteCustomerRelationshipRecords() {
    await this.btnAuthoriseDeleteCustomerRelationshipRecords.click();
}

async clickEnquiries() {
    await this.ddlEnquiries.click();
}

async clickPersonEntity() {
    await this.btnPersonEntity.click();
}

async clickCustomerRelationGroupEnquiry() {
    await this.btnCustomerRelationGroupEnquiry.click();
}

async clickCustomerRelationshipEnquiry() {
    await this.btnCustomerRelationshipEnquiry.click();
}

async clickCustomerRelationshipByGroup() {
    await this.btnCustomerRelationshipByGroup.click();
}

async clickCustomerRelationshipByCustomer() {
    await this.btnCustomerRelationshipByCustomer.click();
}

async clickJointCustomerTransactionReferenceEnquiry() {
    await this.btnJointCustomerTransactionReferenceEnquiry.click();
}

async clickJointCustomerRelationshipEnquiry() {
    await this.btnJointCustomerRelationshipEnquiry.click();
}

async clickJointCustomerEnquiry() {
    await this.btnJointCustomerEnquiry.click();
}

async clickPartyRelationship() {
    await this.ddlPartyRelationship.click();
}

async clickInputPartyRelationship() {
    await this.btnInputPartyRelationship.click();
}

async clickViewAmendPartyRelationship() {
    await this.btnViewAmendPartyRelationship.click();
}


};