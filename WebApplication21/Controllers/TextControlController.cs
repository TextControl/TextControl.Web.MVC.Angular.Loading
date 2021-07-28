using System;
using Microsoft.AspNetCore.Mvc;

namespace backendangular.Controllers {
	 [ApiController]
    [Route("api/[controller]")]
    public class TextControlController : ControllerBase
    {
      [HttpGet]
      [Route("LoadDocument")]
      public TextControlDocument LoadDocument(string DocumentName) {
         using (TXTextControl.ServerTextControl tx = new TXTextControl.ServerTextControl()) {
            tx.Create();
            tx.Load("App_Data/" + DocumentName, TXTextControl.StreamType.WordprocessingML);

            byte[] data;

            tx.Save(out data, TXTextControl.BinaryStreamType.InternalUnicodeFormat);

            return new TextControlDocument() { Document = Convert.ToBase64String(data) };
         }
      }

   }
}
