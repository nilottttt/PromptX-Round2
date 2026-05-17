import json

from schemas.resume_json import ATSResumeJSON


def validate_ats_json(raw_json):

    # convert string JSON -> python dictionary
    parsed_json = json.loads(raw_json)

    # validate against schema
    validated = ATSResumeJSON.model_validate(parsed_json)

    return validated