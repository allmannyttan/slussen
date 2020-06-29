**Slussen** is a simplified API gateway to [fastAPI](http://www.fastapi.se). 

Slussen currently supports retreiving three kinds of objects from fastAPI version 1:
* **tentants** (fi2partners with partner class id 16)
* **contracts** (fi2contracts)
* **rentalobjects** (fi2spatisystems)

The object types have been renamed to make more sense for integration partners without explicit knowledge of fi2xml.

Slussen uses **JSON** instead of XML. The reason for this is increased operability with different programming languages and platforms, as well as more lightweight parsing (more suitable for mobile platforms).

Slussen uses a simplified filter functionality, both for limiting result sets and including related objects. Instead of the generic query style filters of fastAPI each field or included object has its own query parameter (i.e. "includetenants=true").

Some parameters have also been set to "should work for most" defaults (for instance page size for queries is set to 5000 instead of 10) to make it easier to get started. These parameters should be reviewed before going to production.
