import LanguageTestTypeEnum from "./LanguageTestTypeEnum"

type LanguageTestSpecType = {
  min: number,
  max: number,
  step: number,
}

const IELTSSpec: LanguageTestSpecType = {
  min: 0,
  max: 9,
  step: 0.5
}

const CELPIPSpec: LanguageTestSpecType = {
  min: 0,
  max: 10,
  step: 1,
}

const PTEScore: LanguageTestSpecType = {
  min: 0,
  max: 90,
  step: 1,
}


const LanguageTestSpec = {
  [LanguageTestTypeEnum.IELTS]: IELTSSpec,
  [LanguageTestTypeEnum.CELPIP]: CELPIPSpec,
  [LanguageTestTypeEnum.PTE]: PTEScore
}

export default LanguageTestSpec;