import * as DocumentPicker from 'expo-document-picker'
export default function useSelectFiles(){
  
  async function SelectFiles(){
    const files = await DocumentPicker.getDocumentAsync({
      //multiple: true,
      copyToCacheDirectory: true
    })
    
    return files
  }

  return{
    SelectFiles
  }
  
}