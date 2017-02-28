function(doc){
  if(doc.recorded_at){
    index("recordedAt",doc.recorded_at,{"store":"yes"});
  }
}