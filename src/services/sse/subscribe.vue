<script>
import { useApplicantStore } from "../../stores/applicant.store";

export default {
  setup(id) {
    const store = useApplicantStore();

    const source = new EventSource(
      `http://localhost:3000/events/applicant/${id}`
    );

    source.addEventListener("message", (message) => {
      const data = JSON.parse(message.data);
      if (data.name) {
        store.userProfile.name = data.name;
      }
    });

    const listener = function (event) {
      const type = event.type;

      console.log(`${type}: ${event.data || source.url}`);

      if (type === "result") {
        source.close();
      }
    };

    source.addEventListener("open", listener);
    source.addEventListener("error", listener);
  },
};
</script>
